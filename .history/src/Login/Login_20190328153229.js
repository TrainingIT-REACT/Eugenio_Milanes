import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { calculateToken, getAlbumsList } from "../Services/Services";
import { setLogin } from "../Redux/Actions/User";

import "./style.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = { token: "" };
  }

  async componentWillMount() {
    await calculateToken();
    await getAlbumsList();
  }

  async onClick(e) {
    e.preventDefault();
    this.props.setLogin(true);
    await 20;
    if (this.props.login) {
      this.props.history.push("/songs");
    }
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-6 login">
          <div className="center-block">
            <form className="form-signin">
              <img
                className="mb-4"
                src={require("../Assets/banner.png")}
                alt=""
                width="72"
                height="72"
              />
              <h1 className="h3 mb-3 font-weight-normal color-login">
                Please sign in
              </h1>
              <label className="sr-only">Email address</label>
              <input
                type="email"
                id="inputEmail"
                className="form-control"
                placeholder="Email address"
                required=""
                autoFocus=""
              />
              <br />
              <label className="sr-only">Password</label>
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                required=""
              />
              <div className="checkbox mb-3">
                <label className="color-login">
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button
                className="btn btn-lg btn-primary btn-block"
                onClick={this.onClick}
              >
                Sign in
              </button>
              <p className="mt-5 mb-3 text-muted">© 2017-2019</p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.aplication.login
  };
};

const mapDispatchToProps = dispatch => ({
  setLogin: login => dispatch(setLogin(login))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
