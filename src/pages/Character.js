import React from "react";
import { useParams } from "react-router";
import { Characters } from "../models/Characters";
const Character = ({ history }) => {
  const { id } = useParams();
  const handleBack = () => {
    history.goBack();
  };

  const { species, name, description } = Characters.find(
    (character) => character.id === id
  );
  const path = `/assets/${species[0].toLowerCase()}-${id}.png`;
  return (
    <div className="container row mt-5">
      <div className="col-8">
        <img
          className="img-fluid"
          style={{ width: "70%", height: "auto" }}
          src={path}
          alt={id}
        />
      </div>
      <div className="col-4">
        <h1 className="mt-3 text-center">{name}</h1>
        <p>{description}</p>
        <button className="btn btn-outline-warning" onClick={handleBack}>
          Go Back
        </button>
      </div>
    </div>
  );
};
export default Character;
