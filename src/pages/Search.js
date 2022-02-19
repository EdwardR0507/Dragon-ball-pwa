import React, { useState, useEffect } from "react";
import useField from "../hooks/useField";
import { useLocation, useNavigate } from "react-router";
import queryString from "query-string";
import { Characters } from "../models/Characters";
import Card from "../components/Card";
const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { q = "" } = queryString.parse(location.search);

  const [characters, setCharacters] = useState([]);
  const search = useField({ type: "text", initialState: q });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${search.value}`);
  };

  useEffect(() => {
    if (search.value.toString().trim() !== "") {
      const value = search.value.toString().toLocaleLowerCase();
      const characterSearch = Characters.filter((el) =>
        el.name.toLocaleLowerCase().includes(value)
      );
      setCharacters(characterSearch);
    } else {
      setCharacters([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  return (
    <div className="container mt-3">
      <h1>Search view</h1>
      <hr />
      <div className="row">
        <div className="col-12">
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
        <div className="mt-2 col-12">
          <h2>Results: {characters.length}</h2>
          {characters.length === 0 && (
            <div className="alert alert-info text-center">No results</div>
          )}
          <div className="row">
            {characters.map((character) => (
              <Card key={character.id} {...character} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
