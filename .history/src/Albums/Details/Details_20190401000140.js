import React, { Component } from "react";

import Header from "../../Header";
import Footer from "../../Footer";
import { getAlbumsById } from "../../Services/Services";

export default class Details extends Component {
  constructor(props) {
    super(props);
    let { album } = this.props;
    this.state = { album: album };
  }

  componentDidMount() {
    let {
      match: {
        params: { id }
      }
    } = this.props;

    getAlbumsById(id).payload.then(result => {
      console.log(result);
      // let albums = result.albums.items;
      // this.props.addAlbums(albums);
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="App">
          <div className="container">
            <div className="row">
              <h1>Detalle del albums...</h1>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
