import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const NavBar = lazy(() => import("../components/NavBar"));
const Search = lazy(() => import("../pages/Search"));
const Saiyan = lazy(() => import("../pages/Saiyan"));
const Human = lazy(() => import("../pages/Human"));
const Characters = lazy(() => import("../pages/AllCharacters"));
const Character = lazy(() => import("../pages/Character"));

const Spinner = () => {
  return (
    <div style={{ height: "90vh" }}>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Suspense fallback={Spinner()}>
      <NavBar />
      <Switch>
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/human" component={Human} />
        <Route exact path="/saiyan" component={Saiyan} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/character/:id" component={Character} />
        <Redirect from="/" to="/saiyan" />
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
