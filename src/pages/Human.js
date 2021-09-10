import React from "react";
import { Characters } from "../models/Characters";
import Card from "../components/Card";
const Human = () => {
  const humans = Characters.filter(
    (character) => character.species === "Human"
  );
  return (
    <div className="container mt-3">
      <h1>Humans</h1>
      <hr />
      <div className="row">
        {humans.map((human) => (
          <Card key={human.id} {...human} />
        ))}
      </div>
    </div>
  );
};

export default Human;
