import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Link } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";

import { listSongs, setSong } from "../Redux/Actions/Spotify";

import "./styles.css";
class Songs extends Component {
  constructor(props) {
    super(props);
    this.mouseOut = this.mouseOut.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
    this.state = { songs: [], icons: "fa-music" };
  }

  async componentWillMount() {
    let songs = this.props.songs;
    console.log(songs);

    this.setState({ songs: songs });
  }

  changeIconsButton = (key, removeItem, addItems) => {
    this["reference" + key].current.classList.remove(removeItem);
    this["reference" + key].current.classList.add(addItems);
  };
  mouseOver = key => {
    this.changeIconsButton(key, "fa-music", "fa-play");
  };

  mouseOut = key => {
    this.changeIconsButton(key, "fa-play", "fa-music");
  };

  onClick = song => {
    let playSong = {
      music: song.name,
      poster: song.name,
      name: song.name
    };
  };

  createRowsTable = (song, key) => {
    let timestamp = song.duration_ms;
    let mints = new Date(timestamp).getMinutes();
    let seconds = new Date(timestamp).getSeconds();
    var output = mints + ":" + seconds;
    let { icons } = this.state;
    return (
      <tr key={key}>
        <td>
          <button
            onClick={
              (song,
              event => {
                this.onClick(song);
              })
            }
            onMouseOut={
              (key,
              event => {
                this.mouseOut(key);
              })
            }
            onMouseOver={
              (key,
              event => {
                this.mouseOver(key);
              })
            }
            type="button"
            className="btn btn-outline-primary"
          >
            {" "}
            <i
              ref={(this["reference" + key] = React.createRef())}
              className={`fa ${icons}`}
            />
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
  listSongs: () => dispatch(listSongs()),
  setSong: song => dispatch(setSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Songs);
