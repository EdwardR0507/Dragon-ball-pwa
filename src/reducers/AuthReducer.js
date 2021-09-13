import { ACTIONS } from "../constants";
export const AuthReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case ACTIONS.LOGIN:
      return { isAuthenticated: true };
    case ACTIONS.LOGOUT:
      return { isAuthenticated: false };
    default:
      return state;
  }
};
