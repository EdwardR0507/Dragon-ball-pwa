import React from "react";
import { Route } from "react-router";

const PrivateRouter = ({ auth, component: Component, ...rest }) => {
  return <Route {...rest} component={() => <Component />} />;
};

export default PrivateRouter;
