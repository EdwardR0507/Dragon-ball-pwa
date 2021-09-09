import React from "react";
import { Route, Switch } from "react-router-dom";
import Search from "../pages/Search";
import Saiyan from "../pages/Saiyan";
import Human from "../pages/Human";
import NavBar from "../components/NavBar";
const AppRoutes = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/human" component={Human} />
        <Route exact path="/saiyan" component={Saiyan} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </>
  );
};

export default AppRoutes;
