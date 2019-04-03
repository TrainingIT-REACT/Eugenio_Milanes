import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../Search";

export default class index extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container d-flex flex-column flex-md-row justify-content-between">
            <Link to="/" className="navbar-brand">
              <img
                src={require("../Assets/banner.png")}
                width="30"
                height="30"
                alt=""
              />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/albums">
                    Albums
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
