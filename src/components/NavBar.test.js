import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import NavBar from "./NavBar";

describe("Test on <NavBar />", () => {
  const isAuthenticated = true;
  const dispatch = jest.fn();
  const setup = () => {
    render(
      <AuthContext.Provider
        value={{
          isAuthenticated,
          dispatch,
        }}
      >
        <MemoryRouter initialEntry={["/"]}>
          <NavBar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
  };
  test("should be render", () => {
    setup();
    expect(screen.getByText("DB App")).toBeInTheDocument();
  });
  test("should LOGOUT after click the logout button", () => {
    setup();
    const button = screen.getByText("Logout");
    button.click();
    expect(dispatch).toHaveBeenCalledWith({ type: "LOGOUT" });
  });

  test("should be use activeclass", () => {
    setup();
    const link = screen.getAllByRole("link");
    link.forEach((el) => {
      el.click();
      expect(el).toHaveClass("active");
    });
  });
});
