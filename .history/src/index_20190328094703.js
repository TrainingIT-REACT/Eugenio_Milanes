import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import App from "./App";
import store from "../Redux/Stores/store";
import { AppRoutes } from "./Routers";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Router>
    <main>
      <App />
    </main>
    <AppRoutes />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
