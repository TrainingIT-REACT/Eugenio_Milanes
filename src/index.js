import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

import App from "./App";
import store from "./Redux/Stores/store";
import { AppRoutes } from "./Routers";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <main>
        <App />
      </main>
      <AppRoutes />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
