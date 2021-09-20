import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AppRouter from "./AppRouter";
import Home from "../pages/Home";
import { AuthContext } from "../context/AuthContext";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
const HomeRouter = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <PublicRouter path="/home" auth={isAuthenticated} component={Home} />
        <PrivateRouter path="/" auth={isAuthenticated} component={AppRouter} />
      </Switch>
    </Router>
  );
};

export default HomeRouter;
