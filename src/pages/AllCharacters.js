import React from "react";
import { Characters } from "../models/Characters";
import Card from "../components/Card";
const AllCharacters = () => {
  return (
    <div className="container mt-3">
      <h1>All Characters</h1>
      <hr />
      <div className="row">
        {Characters.map((character) => (
          <Card key={character.id} {...character} />
        ))}
      </div>
    </div>
  );
};

export default AllCharacters;
