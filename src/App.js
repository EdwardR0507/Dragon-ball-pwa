import React, { useReducer, useEffect } from "react";
import HomeRouter from "./routes/HomeRouter";
import { AuthContext } from "./context/AuthContext";
import { AuthReducer } from "./reducers/AuthReducer";

// When the app starts, we want to check if the user is authenticated
const init = () => {
  return (
    JSON.parse(localStorage.getItem("isAuthenticated")) || {
      isAuthenticated: false,
    }
  );
};

function App() {
  const [isAuthenticated, dispatch] = useReducer(AuthReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        dispatch,
      }}
    >
      <HomeRouter />
    </AuthContext.Provider>
  );
}

export default App;
