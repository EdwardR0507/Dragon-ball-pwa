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
    <div className="container mx-auto my-5 row">
      <div className="col-12 col-md-6">
        <img className="img-fluid d-block mx-auto" src={path} alt={id} />
      </div>
      <div className="col-12 col-md-5 d-block my-auto">
        <h1 className="mt-3 text-center">{name}</h1>
        <p>{description}</p>
        <button className="btn btn-outline-warning col-12" onClick={handleBack}>
          Go Back
        </button>
      </div>
    </div>
  );
};
export default Character;
