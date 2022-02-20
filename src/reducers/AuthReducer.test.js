import { AuthReducer } from "./AuthReducer";
import { ACTIONS } from "../constants";

describe("Tests on AuthReducer", () => {
  test("should be return state", () => {
    const state = { isAuthenticated: false };
    const actual = AuthReducer(state, {});
    expect(actual).toEqual(state);
  });
  test("should be set isAuthenticated in true", () => {
    const state = { isAuthenticated: false };
    const action = { type: ACTIONS.LOGIN };
    const expected = { isAuthenticated: true };
    const actual = AuthReducer(state, action);
    expect(actual).toEqual(expected);
  });

  test("should be set isAuthenticated in false", () => {
    const state = { isAuthenticated: true };
    const action = { type: ACTIONS.LOGOUT };
    const expected = { isAuthenticated: false };
    const actual = AuthReducer(state, action);
    expect(actual).toEqual(expected);
  });
});
