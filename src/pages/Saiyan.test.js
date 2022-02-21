import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Saiyan from "./Saiyan";

describe("Test on <Saiyan />", () => {
  test("should be render", () => {
    render(
      <MemoryRouter initialEntry={["/saiyans"]}>
        <Saiyan />
      </MemoryRouter>
    );
    expect(screen.getByText("Saiyans")).toBeInTheDocument();
  });
});
