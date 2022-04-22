import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

const Pokemon = () => {
  const [PokemonArray, setPokemonArray] = useState([]);
  const [PokemonBaseArray, setPokemonBaseArray] = useState([]);
  const [NextSet, setNextSet] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=40"
  );
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);

  const getPokemon = async () => {
    setSearching(true);
    console.log(NextSet);
    const response = await fetch(NextSet);
    const data = await response.json();
    setNextSet(data.next);

    console.log(data);
    await pokemonIndividual(data.results);
    setSearching(false);
  };

  async function pokemonIndividual(results) {
    for (let pokemon of results) {
      await fetch(pokemon.url).then(async (response) => {
        const data = await response.json();
        console.log(data);
        setPokemonArray((conArray) => [...conArray, data]);
        setPokemonBaseArray((conArray) => [...conArray, data]);
      });
    }
  }

  useEffect(() => {
    if (!searching) {
      getPokemon();
    }
  }, []);

  function SearchBar() {
    return (
      <input
        type="text"
        value={search}
        onChange={(e) => handleChange(e)}
        placeholder="Search for a Pokemon"
      />
    );
  }

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (search.length) {
      const results = PokemonBaseArray.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
      setPokemonArray(results);
    } else {
      setPokemonArray(PokemonBaseArray);
    }
  }, [search]);

  return (
    <section>
      <div className="body">
        <input
          type="text"
          value={search}
          onChange={(e) => handleChange(e)}
          placeholder="Search for a Pokemon"
        />
        <div className="pokemon-list">
          {!searching ? (
            PokemonArray.map((pokemon, index) => (
              <PokemonCard
                key={index}
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.front_default}
              />
            ))
          ) : (
            <p>I am catching your pokemon please hold on!</p>
          )}
        </div>
        <button onClick={getPokemon}>Ladda in fler Pokemons</button>
      </div>
    </section>
  );
};

export default Pokemon;
