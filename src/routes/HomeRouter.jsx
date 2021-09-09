import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppRoutes from "./AppRouter";
import Home from "../pages/Home";
const HomeRouter = () => {
  return (
    <Router>
      <AppRoutes />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default HomeRouter;
