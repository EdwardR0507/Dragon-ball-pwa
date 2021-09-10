import React from "react";
const Home = ({ history }) => {
  const handleClick = () => {
    history.push("/saiyan");
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
