import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, species, id }) => {
  const path = `/assets/${species[0].toLowerCase()}-${id}.png`;

  return (
    <div
      className="card m-3 col-12 col-md-4 mx-auto p-2"
      style={{ width: "12.5rem", height: "100%" }}
    >
      <img
        loading="lazy"
        className="card-img-top"
        src={path}
        alt={id}
        style={{
          width: "100%",
          height: "12rem",
          objectFit: "scale-down",
        }}
      />
      <div className="card-body">
        <h1 className="card-title h5">{name}</h1>
        <p className="card-text">
          <Link className="card-link" to={`/character/${id}`}>
            Show more
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Card;
