import React from "react";
import useField from "../hooks/useField";
import { useLocation } from "react-router";
import queryString from "query-string";

const Search = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const search = useField("text", q);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${search.value}`);
  };

  return (
    <div className="container">
      <h1>Search view</h1>
      <hr />
      <div className="row">
        <form className="col-md-6" onSubmit={handleSubmit}>
          <div className="form-group mb-2">
            <label htmlFor="search" className="form-label w-100">
              Character:{" "}
            </label>
            <input
              {...search}
              className="form-control"
              autoComplete="off"
              id="search"
              placeholder="Search..."
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
