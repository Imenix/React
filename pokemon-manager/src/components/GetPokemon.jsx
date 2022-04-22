import { useState, useEffect } from "react";
import SearchBar from "./Searchbar";

const GetPokemon = (props) => {
  const [pokemon, setPokemon] = useState();
  const [fetching, setFetching] = useState(false);
  //const [pokeNum, setPokeNum] = useState(0);

  const url = `https://pokeapi.co/api/v2/pokemon?limit=40&offset=0`;

  const getData = async () => {
    try {
      setFetching(true);
      const response = await fetch(url);
      const data = await response.json();

      let pokeArray = [];

      for (let index = 0; index < data.results.length; index++) {
        await fetch(data.results[index].url).then(async (response) => {
          const pokeData = await response.json();
          const pokemonInfo = {
            id: pokeData.id,
            name: pokeData.name,
            image: pokeData.sprites.front_default,
            abilities: pokeData.abilities,
          };
        });
        pokeArray.push(pokemonInfo);
      }
      setPokemon(pokeArray);
      setFetching(false);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="grid-container">
      <h3>CHOOSE YOUR POKEMON</h3>

      <div className="result-box">
        {fetching === false ? (
          pokemon?.map((pokemon) => (
            <ul>
              {console.log(pokemon.name)}
              <li key={pokemon.id}>
                <p>{pokemon.name}</p>
                <img src={pokemon.image} />
              </li>
            </ul>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default GetPokemon;
