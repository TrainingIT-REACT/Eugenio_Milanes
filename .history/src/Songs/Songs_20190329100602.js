import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Link } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";

import { listSongs } from "../Redux/Actions/Spotify";

import "./styles.css";
class Songs extends Component {
  constructor(props) {
    super(props);
    this.mouseOut = this.mouseOut.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
    this.state = { songs: [], active: false };
  }

  async componentWillMount() {
    let songs = this.props.songs;
    console.log(songs);
    this.setState({ songs: songs });
  }

  mouseOver(e) {
    this.setState({ active: true });
  }

  mouseOut(e) {
    this.setState({ icons: false });
  }

  createRowsTable = (song, key) => {
    let timestamp = song.duration_ms;
    let mints = new Date(timestamp).getMinutes();
    let seconds = new Date(timestamp).getSeconds();
    var output = mints + ":" + seconds;
    let { active } = this.state;
    return (
      <tr key={key}>
        <td>
          <button
            onMouseOut={() => this.mouseOut()}
            onMouseOver={() => this.mouseOver()}
            type="button"
            className="btn btn-outline-primary"
          >
            {" "}
            <i class={!active ? "fa fa-music" : "fa fa-music"} />
          </button>
        </td>
        <td>{song.name}</td>
        <td>{song.album.release_date}</td>
        <td>{output}</td>
      </tr>
    );
  };

  render() {
    let { songs } = this.state;

    return (
      <>
        <Header />
        <div className="App">
          <div className="container">
            <div className="row">
              <h1>Listado de canciones...</h1>
              <table className="table table-color">
                <thead />
                <tbody>
                  {songs.map((song, i) => {
                    return this.createRowsTable(song, i);
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    songs: state.aplication.songs
  };
};

const mapDispatchToProps = dispatch => ({
  listSongs: () => dispatch(listSongs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Songs);
