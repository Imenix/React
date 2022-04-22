import React from "react";
import Pokemon from "./Pokemon";
import { useState } from "react";

const PokemonCard = ({ id, name, image }) => {
  const [selected, setSelected] = useState(false);
  return (
    <div className="pokemon-card">
      <h1># {id}</h1>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <button onClick={setSelected(true)}>Add to Team</button>
      {/* <div>{ if(selected == true)
      <button onClick={selected == false}>Remove from Team</button>}</div> */}
    </div>
  );
};

export default PokemonCard;
