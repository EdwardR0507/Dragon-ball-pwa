import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";

const PublicRouter = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return !isAuthenticated.isAuthenticated ? children : <Navigate to="/home" />;
};

export default PublicRouter;
