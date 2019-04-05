import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { setLogin } from "../Redux/Actions/User";
import Search from "../Search";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { loggin: false };
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.props.setLogin(false);
    this.props.history.push("/login");
  }

  render() {
    let { username } = this.props;
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container d-flex flex-column flex-md-row justify-content-between">
            <Link to="/" className="navbar-brand">
              <img
                src={require("../Assets/banner.png")}
                width="30"
                height="30"
                alt="Logo de la App"
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
                  <Link className="nav-link" to="/" aria-label="Home">
                    Home
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/albums" aria-label="Albums">
                    Albums
                  </Link>
                </li>
              </ul>
              <Search />
              <div className="pull-right">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <h6>{`Hola, ${username}`}</h6>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={this.onClick}
                    >
                      <span className="fa fa-eject" /> Salir
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.aplication.user.username
  };
};

const mapDispatchToProps = dispatch => ({
  setLogin: login => dispatch(setLogin(login))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
