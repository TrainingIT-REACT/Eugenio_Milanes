import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../Login/Login";
import Songs from "../Songs";
import Albums from "../Albums";
import Details from "../Albums/Details";
import Searches from "../Search/Searches";
import store from "../Redux/Stores";
import Footer from "../Footer";
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
const PrivateRoutes = () => (
  <>
    <Switch>
      <PrivateRoute exact path="/" component={Songs} />
      <PrivateRoute exact path="/songs" component={Songs} />
      <PrivateRoute exact path="/songs/:id" component={Details} />
      <PrivateRoute exact path="/albums" component={Albums} />
      <PrivateRoute exact path="/searches" component={Searches} />
    </Switch>
    <Footer player={true} />
  </>
);
export const AppRoutes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/callback" component={Login} />
    <Route component={PrivateRoutes} />
  </Switch>
);
