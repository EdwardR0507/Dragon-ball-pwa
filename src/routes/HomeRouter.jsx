import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppRoutes from "./AppRouter";
import Home from "../pages/Home";
const LoginRouter = () => {
  return (
    <Router>
      <AppRoutes />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default LoginRouter;
