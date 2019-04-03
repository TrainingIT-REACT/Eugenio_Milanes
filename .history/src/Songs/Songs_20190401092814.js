import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../Header";
import Footer from "../Footer";
import ItemsTable from "./ItemsTable";

import { listSongs, setSong } from "../Redux/Actions/Spotify";

import "./styles.css";
class Songs extends Component {
  constructor(props) {
    super(props);
    this.state = { songs: [], icons: "fa-music" };
  }

  async componentWillMount() {
    let songs = this.props.songs;
    this.setState({ songs: songs, song: null });
  }

  render() {
    let { songs } = this.state;

    return (
      <>
        <Header />
        <div className="App">
          <div className="container">
            <div className="row">
              <h1>Listado de canciones...</h1>
              <hr />
              <hr />
              <hr />
              <br />
              <table className="table table-color">
                <thead />
                <tbody>
                  {songs.map((song, i) => {
                    return <ItemsTable song={song} picture={""} key={i} />;
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
