import React, { Component } from "react";

import Header from "../../Header";
import Footer from "../../Footer";
import ItemsTable from "../../Songs/ItemsTable";
import { getAlbumsById } from "../../Services/Services";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { songs: [] };
  }

  componentDidMount() {
    let {
      match: {
        params: { id }
      }
    } = this.props;

    getAlbumsById(id).payload.then(result => {
      console.log(result);
      let songs = result.tracks.items;
      this.setState({ songs: songs });
    });
  }

  render() {
    let { songs } = this.state;
    console.log(songs);

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
                  {songs.map((song, i) => {
                    return <ItemsTable song={song} key={i} />;
                  })}
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
