import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { connect } from "react-redux";

import { listAlbums } from "../Redux/Actions/Spotify";

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
  listAlbums: login => dispatch(listAlbums(login))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);
