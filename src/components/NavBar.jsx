import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ACTIONS } from "../constants";
import { AuthContext } from "../context/AuthContext";
const NavBar = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: ACTIONS.LOGOUT });
    navigate("/home");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid">
        <h2 className="navbar-brand" href="#">
          DB App
        </h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active text-white" : ""}`
                }
                aria-current="page"
                to="/characters"
              >
                All Characters
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active text-white" : ""}`
                }
                aria-current="page"
                to="/saiyans"
              >
                Saiyans
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active text-white" : ""}`
                }
                aria-current="page"
                to="/humans"
              >
                Humans
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active text-white" : ""}`
                }
                aria-current="page"
                to="/search"
              >
                Search
              </NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
