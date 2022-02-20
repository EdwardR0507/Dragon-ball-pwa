import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import { AuthContext } from "../context/AuthContext";
describe("Test on <PrivateRouter />", () => {
  test("should be render the component if is authenticated", () => {
    const isAuthenticated = {
      isAuthenticated: true,
    };
    render(
      <AuthContext.Provider value={{ isAuthenticated }}>
        <MemoryRouter initialEntry={`/`}>
          <PrivateRouter>
            <div>Goku</div>
          </PrivateRouter>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Goku")).toBeInTheDocument();
  });
});
