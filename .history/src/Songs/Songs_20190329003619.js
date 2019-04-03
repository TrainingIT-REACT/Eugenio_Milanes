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
    this.state = { songs: [] };
  }

  async componentWillMount() {
    let songs = this.props.songs;
    console.log(songs);
    this.setState({ songs: songs });
  }

  createRowsTable = (song, key) => {
    let timestamp = song.duration_ms;
    let mints = new Date(timestamp).getMinutes();
    let seconds = new Date(timestamp).getSeconds();
    var output = mints + ":" + seconds;
    return (
      <tr key={key}>
        <td>
          <button>
            {" "}
            <i class="fa fa-music" />
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
