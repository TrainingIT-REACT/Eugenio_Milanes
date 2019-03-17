import React, { Component } from "react";
import { albumReady } from "../Spotify/Spotyfy";

export default class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = { listAlbums: [], token: "" };
  }

  generateTokenSpotify() {
    const grant_type = "authorization_code";
    const client_id = "4aa3f1246e414d1f8a2861c4401d7d5b";
    const client_secret = "d856d722f23646f3a1111645c4eb09fa";

    const request = new Request(`https://accounts.spotify.com/api/token`, {
      method: "POST",
      headers: new Headers({
        grant_type: grant_type,
        client_id: client_id,
        client_secret: client_secret
      })
    });
    fetch(request)
      .then(res => {
        return res;
      })
      .then(res => {
        console.log(res);
        this.setState({ token: res.access_token });
      });
  }
  componentWillMount() {
    const request = new Request(
      `https://api.spotify.com/v1/browse/new-releases?country=ES&limit=50&offset=5`,
      {
        headers: new Headers({
          Authorization:
            "Bearer " +
            "BQAepoo53TPoZU1zLlafl-Pw52A1V1EE0XcAJRu_I28zznGrcDmnRN3j54bUVfr3O5KetW_Odk7jIxzS-vSm-GdWvMdK28BGjmiCmcIx3qVHXGPV5cq-RSQXVFDRAuVrAX9oBvgdJDgB2St4LG3xD27Y00-v9_tXBQiaXzIT"
        })
      }
    );
    fetch(request)
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({ listAlbums: res.albums.items });
      })
      .catch(err => {
        return err;
      });
  }

  createBadgesArtist = (artist, i) => {
    return (
      <span className="badge badge-pill badge-primary" key={i}>
        {artist.name}
      </span>
    );
  };
  createCardAlbums = (album, i) => {
    let { artists } = album;
    return (
      <div className="col-lg-4" key={i}>
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
      </div>
    );
  };

  render() {
    let { listAlbums } = this.state;

    return (
      <main role="main">
        <div className="container marketing">
          <div className="row">
            {listAlbums.map((album, i) => {
              return this.createCardAlbums(album, i);
            })}
          </div>
        </div>
      </main>
    );
  }
}
