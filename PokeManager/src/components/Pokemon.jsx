import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

const Pokemon = () => {
  const [PokemonArray, setPokemonArray] = useState([]);
  const [NextSet, setNextSet] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=40"
  );

  const getPokemon = async () => {
    const response = await fetch(NextSet);
    const data = await response.json();

    setNextSet(data.next);
    console.log(data);

    console.log(PokemonArray);
    await pokemonIndividual(data.results);
  };
  function pokemonIndividual(results) {
    for (let pokemon of results) {
      fetch(pokemon.url).then(async (response) => {
        const data = await response.json();
        console.log(data);
        setPokemonArray((conArray) => [...conArray, data]);
      });
    }
  }
  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className="pokemon-list">
      {PokemonArray.map((pokemon, index) => (
        <PokemonCard
          key={index}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
        />
      ))}
    </div>
  );
};

export default Pokemon;
