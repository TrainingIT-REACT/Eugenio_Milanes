import React, { Component } from "react";
import { Link } from "react-router-dom";

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
              <form className="form-inline mt-2 mt-md-0">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
