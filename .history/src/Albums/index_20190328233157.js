import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { connect } from "react-redux";

import { listAlbums } from "../Redux/Actions/Spotify";

import "./styles.css";
class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentWillMount() {}
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
  listAlbums: () => dispatch(listAlbums())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);
