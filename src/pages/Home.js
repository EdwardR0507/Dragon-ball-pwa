import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ACTIONS } from "../constants";
import { useHistory } from "react-router";
const Home = () => {
  const { dispatch } = useContext(AuthContext);

  const history = useHistory();

  const handleClick = () => {
    dispatch({ type: ACTIONS.LOGIN });
    history.push("/characters");
  };
  return (
    <div className="container mt-5 text-center d-flex flex-column justify-content-center">
      <img src="/assets/animate.gif" alt="animation" />
      <button onClick={handleClick} className=" my-5 btn btn-primary">
        Start
      </button>
    </div>
  );
};

export default Home;
