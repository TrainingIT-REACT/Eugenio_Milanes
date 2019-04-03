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
    this.onClick = this.onClick.bind(this);
    this.state = { songs: [], icons: "fa-music" };
  }

  async componentWillMount() {
    let songs = this.props.songs;
    this.setState({ songs: songs });
  }

  mouseOut = id => e => {
    console.log(e.get);
    //this[`icons${id}`].current.className("fa fa-music");
  };

  mouseOver = id => e => {
    console.log(e);
    //this[`icons${id}`].current.className("fa fa-play");
  };

  onClick = e => {
    console.log(e);
    //this[`icons${id}`].current.className("fa fa-play");
  };

  createRowsTable = (song, key) => {
    let timestamp = song.duration_ms;
    let mints = new Date(timestamp).getMinutes();
    let seconds = new Date(timestamp).getSeconds();
    var output = mints + ":" + seconds;
    let { icons } = this.state;

    let inconsRef+`${key}` = React.createRef();
    return (
      <tr key={key}>
        <td>
          <button type="button" className="btn btn-outline-primary">
            {" "}
            <i onClick={this.onClick(this)} className={`fa ${icons}`} />
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
