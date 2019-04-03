import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "../Login/Login";
import Songs from "../Songs";
import Albums from "../Albums";
import store from "../Redux/Stores";

const PrivateRoute = ({ component: Component, ...rest }) => {
  let { login } = store.getState().aplication;
  return (
    <Route
      {...rest}
      render={props =>
        login ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export const AppRoutes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/callback" component={Login} />
    <PrivateRoute exact path="/" component={Songs} />
    <PrivateRoute exact path="/songs" component={Songs} />
    <PrivateRoute exact path="/albums" component={Albums} />
  </Switch>
);
