import React, { useMemo } from "react";
import useField from "../hooks/useField";
import { useLocation, useNavigate } from "react-router";
import queryString from "query-string";
import Card from "../components/Card";
import { getCharacterByName } from "../helpers/getCharacterByName";
const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { q = "" } = queryString.parse(location.search);

  const search = useField({ type: "text", initialState: q });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${search.value}`);
  };

  const charactersFiltered = useMemo(() => getCharacterByName(q), [q]);

  return (
    <div className="container mt-3">
      <h1>Search Characters</h1>
      <hr />
      <div className="row">
        <div className="col-12 col-md-6">
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
                placeholder="Search by name..."
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Search
            </button>
          </form>
        </div>
        <div className="mt-2 col-12 col-md-6">
          <h2>Results: {charactersFiltered.length}</h2>
          {q === "" ? (
            <div className="alert alert-info text-center">
              Search a Character
            </div>
          ) : (
            charactersFiltered.length === 0 && (
              <div className="alert alert-danger text-center">No results</div>
            )
          )}
          <div className="row">
            {charactersFiltered.map((character) => (
              <Card key={character.id} {...character} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
