import React, { Component } from "react";

import Header from "../../Header";
import Footer from "../../Footer";
import ItemsTable from "../../Songs/ItemsTable";
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
      let albums = result.tracks.items;
      this.setState({ albums: albums });
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
              <table className="table table-color">
                <thead />
                <tbody>
                  {/* {songs.map((song, i) => {
                    return this.createRowsTable(song, i);
                  })} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
