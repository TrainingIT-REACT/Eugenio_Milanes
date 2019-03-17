import React from "react";
import { Switch, Route } from "react-router-dom";
import Albums from "../Albums/Albums";
import Songs from "../Songs/Songs";

const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={Albums} />
    <Route path="/songs" component={Songs} />
  </Switch>
);

export default AppRoutes;
