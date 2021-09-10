import React from "react";
import { useParams } from "react-router";
const Character = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default Character;
