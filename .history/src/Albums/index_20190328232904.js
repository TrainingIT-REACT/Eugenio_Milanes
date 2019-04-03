import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { connect } from "react-redux";

import "./styles.css";
class Albums extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="App">
          <div className="container">
            <div className="row" />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.aplication.login
  };
};

const mapDispatchToProps = dispatch => ({
  setLogin: login => dispatch(setLogin(login)),
  addAlbums: albums => dispatch(addAlbums(albums)),
  addSongs: songs => dispatch(addSongs(songs))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Albums)
);
