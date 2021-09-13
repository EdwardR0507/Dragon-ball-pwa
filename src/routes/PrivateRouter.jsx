import React from "react";
import { Route } from "react-router";

const PrivateRouter = ({ component: Component }) => {
  return <Route path="/private" component={<Component />} />;
};

export default PrivateRouter;
