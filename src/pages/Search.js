import React, { useState, useEffect } from "react";
import useField from "../hooks/useField";
import { useLocation } from "react-router";
import queryString from "query-string";
import { Characters } from "../models/Characters";
import Card from "../components/Card";
const Search = ({ history }) => {
  const [characters, setCharacters] = useState([]);

  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const search = useField("text", q);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${search.value}`);
  };

  useEffect(() => {
    if (search.value.trim() !== "") {
      const value = search.value.toLocaleLowerCase();
      const characterSearch = Characters.filter((el) =>
        el.name.toLocaleLowerCase().includes(value)
      );
      setCharacters(characterSearch);
    } else {
      setCharacters([]);
    }
  }, [search.value]);

  return (
    <div className="container mt-3">
      <h1>Search view</h1>
      <hr />
      <div className="row">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-2">
              <label htmlFor="search" className="form-label w-100">
                Character:{" "}
              </label>
              <input
                {...search}
                name="search"
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
        <div className="col-6">
          <h2>Results: {characters.length}</h2>
          {characters.length === 0 && (
            <div className="alert alert-info text-center">No results</div>
          )}
          {characters.map((character) => (
            <Card key={character.id} {...character} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
