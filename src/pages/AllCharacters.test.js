import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AllCharacters from "./AllCharacters";

describe("Test on <AllCharacters />", () => {
  test("should be render", () => {
    render(
      <MemoryRouter initialEntry={["/characters"]}>
        <AllCharacters />
      </MemoryRouter>
    );
    expect(screen.getByText("All Characters")).toBeInTheDocument();
  });
});
