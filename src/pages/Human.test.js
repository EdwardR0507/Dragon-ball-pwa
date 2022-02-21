import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Human from "./Human";

describe("Test on <Human />", () => {
  test("should be render", () => {
    render(
      <MemoryRouter initialEntry={["/humans"]}>
        <Human />
      </MemoryRouter>
    );
    expect(screen.getByText("Humans")).toBeInTheDocument();
  });
});
