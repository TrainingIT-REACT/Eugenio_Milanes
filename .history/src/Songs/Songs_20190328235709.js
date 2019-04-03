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
    let songs = this.props.albums;
    this.setState({ songs: songs });
  }

  createRowsTable = (song, key) => {
    return (
      <tr>
        <td>{}</td>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
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
              <h1>Plantilla de la práctica final!</h1>
              <table className="table table-color">
                <thead>
                  <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                  </tr>
                </thead>
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
    albums: state.aplication.albums
  };
};

const mapDispatchToProps = dispatch => ({
  listSongs: () => dispatch(listSongs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Songs);
