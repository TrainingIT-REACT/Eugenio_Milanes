import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  calculateToken,
  getAlbumsList,
  getSongsList
} from "../Services/Services";
import { setLogin } from "../Redux/Actions/User";
import { addAlbums, addSongs } from "../Redux/Actions/Spotify";

import "./style.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = { token: "" };
  }

  async componentWillMount() {
    calculateToken();
    await 80;
    getAlbumsList().payload.then(result => {
      let albums = result.albums.items;
      this.props.addAlbums(albums);
    });
    getSongsList().payload.then(result => {
      let songs = result.tracks;
      this.props.addSongs(songs);
    });
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
                className="form-control"
                placeholder="localhost@gmail.com"
                required=""
                autoFocus=""
              />
              <br />
              <label className="sr-only">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="***********"
                required=""
              />

              <button
                className="btn btn-lg btn-success btn-block"
                onClick={this.onClick}
              >
                <br />
                Entrar
              </button>
              <p className="mt-5 mb-3 text-muted">© ReactTyfi</p>
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
  setLogin: login => dispatch(setLogin(login)),
  addAlbums: albums => dispatch(addAlbums(albums)),
  addSongs: songs => dispatch(addSongs(songs))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
