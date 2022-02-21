import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Search from "./Search";

describe("Tests on <Search />", () => {
  const setup = () => {
    render(
      <MemoryRouter initialEntry={["/search"]}>
        <Search />
      </MemoryRouter>
    );
  };
  test("should be render", () => {
    setup();
    expect(screen.getByText("Search Characters")).toBeInTheDocument();
  });
  test("should be submit a character", () => {
    setup();
    fireEvent.change(screen.getByPlaceholderText("Search by name..."), {
      target: { value: "Goku" },
    });
    fireEvent.click(screen.getByText("Search"));
    expect(screen.getByText("Goku")).toBeInTheDocument();
  });
  test("should display the text 'no results' if there is no character", () => {
    setup();
    fireEvent.change(screen.getByPlaceholderText("Search by name..."), {
      target: { value: "Pikachu" },
    });
    fireEvent.click(screen.getByText("Search"));
    expect(screen.getByText("No results")).toBeInTheDocument();
  });
});
