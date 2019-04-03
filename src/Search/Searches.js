import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../Header";
import Footer from "../Footer";
import { getSearching } from "../Redux/Actions/Spotify";

class Searches extends Component {
  constructor(props) {
    super(props);
    this.state = { searching: "" };
  }

  render() {
    return (
      <>
        <Header />
        <div className="App">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <h5>{`Buscando: ${this.props.searching}`} </h5>
              </div>
              <div className="col-4">
                <h5>Ultimas Busquedas</h5>
              </div>
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
    searching: state.aplication.searching
  };
};

const mapDispatchToProps = dispatch => ({
  getSearching: () => dispatch(getSearching())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searches);
