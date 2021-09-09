import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
const LoginRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default LoginRouter;
