import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, species, id }) => {
  const path = `/assets/${species[0].toLowerCase()}-${id}.png`;

  return (
    <div
      className="card m-3 col-12 col-md-4 mx-auto"
      style={{ width: "12.5rem", height: "50%" }}
    >
      <img className="card-img-top" src={path} alt={id} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-link">
          <Link className="card-link" to={`/character/${id}`}>
            Show more
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Card;
