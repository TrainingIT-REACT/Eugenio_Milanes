import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { connect } from "react-redux";
import { BrowserRouter as Link } from "react-router-dom";

import { listAlbums } from "../Redux/Actions/Spotify";

import "./styles.css";
class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  createBadgesArtist = (artist, i) => {
    return (
      <span className="badge badge-pill badge-primary" key={i}>
        {artist.name}
      </span>
    );
  };

  createCardAlbums = (album, i) => {
    let { artists, id } = album;
    return (
      <div className="col-lg-4 font-cards" key={i}>
        <Link to={`/songs/${id}`}>
          <div className="card">
            <img src={album.images[0].url} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{album.name}</h5>
              <p className="card-text">
                {artists.map((artist, i) => {
                  return this.createBadgesArtist(artist, i);
                })}
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  };

  render() {
    let albums = this.props.albums;
    console.log(albums);

    return (
      <>
        <Header />
        <div className="App">
          <div className="container">
            <div className="row">
              {albums.map((album, i) => {
                return this.createCardAlbums(album, i);
              })}
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
    albums: state.aplication.albums
  };
};

const mapDispatchToProps = dispatch => ({
  listAlbums: () => dispatch(listAlbums())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);
