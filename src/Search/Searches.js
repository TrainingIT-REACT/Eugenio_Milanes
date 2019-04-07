import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../Header";
import ItemsTable from "../Songs/ItemsTable";
import { getSearching } from "../Redux/Actions/Spotify";

import "./styles.css";
class Searches extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }

  render() {
    let { results } = this.props;
    let { lasts } = this.props;

    return (
      <>
        <Header />
        <div className="App">
          <div className="container">
            <div className="row">
              <br />
              <div className="col-8 search">
                <h3>{`Resultados: ${this.props.searching}`} </h3>
                <table className="table table-color">
                  <thead />
                  <tbody>
                    {results.map((song, i) => {
                      let image = require("../Assets/default.jpg");
                      return <ItemsTable song={song} picture={image} key={i} />;
                    })}
                  </tbody>
                </table>
              </div>
              <div className="col-4 search">
                <h5> Ultimas busquedas</h5>
                <ul className="list-group list-group-flush">
                  {lasts.map((last, i) => {
                    return (
                      <li
                        className="list-group-item list-group-item-action list-group-item-dark"
                        key={i}
                      >
                        {last}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    searching: state.aplication.searching,
    results: state.aplication.results,
    lasts: state.aplication.lasts
  };
};

const mapDispatchToProps = dispatch => ({
  getSearching: () => dispatch(getSearching())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searches);
