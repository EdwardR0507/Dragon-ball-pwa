import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Home from "./Home";

describe("Test on <Home />", () => {
  test("should be render", () => {
    const dispatch = jest.fn();
    const isAuthenticated = {
      isAuthenticated: true,
    };
    render(
      <AuthContext.Provider
        value={{
          isAuthenticated,
          dispatch,
        }}
      >
        <MemoryRouter initialEntry={`/`}>
          <Home />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Start")).toBeInTheDocument();
  });
});
