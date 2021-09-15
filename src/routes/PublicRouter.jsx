import React from "react";
import { Route, Switch } from "react-router";

const PublicRouter = ({ auth, component: Component, ...rest }) => {
  return <Route {...rest} component={() => <Component />} />;
};

export default PublicRouter;
