import React from "react";
import { useParams } from "react-router";
import { Characters } from "../models/Characters";
const Character = () => {
  const { id } = useParams();
  const { species, name, description } = Characters.find(
    (character) => character.id === id
  );
  const path = `/assets/${species[0].toLowerCase()}-${id}.png`;
  console.log(path);
  return (
    <div className="container row">
      <div className="col-8">
        <img
          className="img-fluid mt-3"
          style={{ width: "70%", height: "auto" }}
          src={path}
          alt={id}
        />
      </div>
      <div className="col-4">
        <h1 className="mt-3 text-center">{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default Character;
