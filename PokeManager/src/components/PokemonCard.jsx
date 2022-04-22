import React from "react";
import Pokemon from "./Pokemon";

const PokemonCard = ({ id, name, image }) => {
  return (
    <div className="pokemon-card">
      <h1># {id}</h1>
      <h2>{name}</h2>
      <img src={image} alt={name} />
    </div>
  );
};

export default PokemonCard;
