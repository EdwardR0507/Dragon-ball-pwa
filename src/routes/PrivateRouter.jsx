import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRouter = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        auth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/Home" />
        )
      }
    />
  );
};

export default PrivateRouter;
