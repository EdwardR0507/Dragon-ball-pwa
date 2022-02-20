import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Card from "./Card";
describe("Tests on <Card />", () => {
  test("should be render", () => {
    const name = "Bulma";
    const species = "h";
    const id = "bulma";
    render(
      <MemoryRouter initialEntry={`/`}>
        <Routes>
          <Route
            path="/"
            element={<Card name={name} species={species} id={id} />}
          />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
