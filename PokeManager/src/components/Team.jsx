import React from "react";
import { useState } from "react";
import PokemonCard from "./PokemonCard";
import Pokemon from "./Pokemon";

const Team = () => {
  const [team, setTeam] = useState([]);
  const selectedCard = () => {
    if (selected) {
      setTeam((team) => [...team, selected]);
    }

    return (
      <div>
        <h1>Team!</h1>
        <div className="team-container">
          {team.map((pokemon) => (
            <PokemonCard key={pokemon.id} {...pokemon} />
          ))}
        </div>
      </div>
    );
  };
};

export default Team;
