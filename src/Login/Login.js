import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";

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
    this.inputUser = React.createRef();
    this.inputPass = React.createRef();
    this.onClick = this.onClick.bind(this);
    this.state = { loading: true };
  }

  async componentDidMount() {
    calculateToken();
    setTimeout(() => {
      getAlbumsList().payload.then(result => {
        let albums = result.albums.items;
        this.props.addAlbums(albums);
      });
      getSongsList().payload.then(result => {
        let songsApi = result.tracks;

        let songs = songsApi.filter((song, index) => {
          if (song.preview_url) {
            return song;
          }
          return null;
        });
        this.props.addSongs(songs);

        let song = songs[0];
        let setSong = {
          music: song.preview_url,
          poster: song.album.images[1].url,
          name: song.name,
          durations: song.duration_ms,
          play: false
        };
        this.props.setSong(setSong);
        this.setState({ loading: false });
      });
    }, 3000);
  }

  onClick(e) {
    e.preventDefault();

    let { username } = this.props;
    let { password } = this.props;
    let inputUser = this.inputUser.current.value;
    let inputPass = this.inputPass.current.value;

    this.props.history.push("/songs");
    this.props.setLogin(true);

    if (
      inputUser.lenth === 0 ||
      inputUser === "" ||
      inputPass.lenth === 0 ||
      inputPass === ""
    ) {
      alert("Revise los campos de registro, por favor!");
    } else {
      if (username === inputUser && password === inputPass) {
        this.props.history.push("/songs");
        this.props.setLogin(true);
      } else {
        alert("Usuario ó Contraseña, incorrecta!");
      }
    }
  }

  render() {
    let { loading } = this.state;
    return (
      <LoadingOverlay active={loading} spinner text="Cargando datos...">
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
                  type="text"
                  className="form-control"
                  placeholder="Admin"
                  ref={this.inputUser}
                />
                <br />
                <input
                  type="password"
                  className="form-control"
                  placeholder="*****"
                  ref={this.inputPass}
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
      </LoadingOverlay>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.aplication.user.username,
    password: state.aplication.user.password,
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
