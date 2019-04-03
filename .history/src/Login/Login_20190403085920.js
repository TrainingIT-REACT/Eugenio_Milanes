import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  calculateToken,
  getAlbumsList,
  getSongsList
} from "../Services/Services";
import { setLogin } from "../Redux/Actions/User";
import { addAlbums, addSongs, setSong } from "../Redux/Actions/Spotify";

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
      songs.filter((song, index) => {
        song.preview_url?song.preview_url
        console.log(song);
        console.log(index);
      });
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
                alt="ReacTify"
                width="72"
                height="72"
              />
              <h1 className="h3 mb-3 font-weight-normal color-login">
                Bienbenidos a ReacTify:
              </h1>
              <input
                type="email"
                className="form-control"
                placeholder="localhost@gmail.com"
                required=""
                autoFocus=""
              />
              <br />
              <input
                type="password"
                className="form-control"
                placeholder="***********"
                required=""
              />
              <br />
              <button
                className="btn btn-lg btn-primary btn-block"
                onClick={this.onClick}
              >
                Entrar
              </button>
              <p className="mt-5 mb-3 text-muted">© ReacTify</p>
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
  addSongs: songs => dispatch(addSongs(songs)),
  setSong: song => dispatch(setSong(song))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
