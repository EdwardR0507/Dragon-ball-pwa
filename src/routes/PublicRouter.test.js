import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import { AuthContext } from "../context/AuthContext";
describe("Test on <PublicRouter />", () => {
  test("should be render the component if is not authenticated", () => {
    const isAuthenticated = {
      isAuthenticated: false,
    };
    render(
      <AuthContext.Provider value={{ isAuthenticated }}>
        <MemoryRouter initialEntry={`/`}>
          <PublicRouter>
            <div>Goku</div>
          </PublicRouter>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Goku")).toBeInTheDocument();
  });
});
