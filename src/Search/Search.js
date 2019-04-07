import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  setSearching,
  addSearches,
  addResults
} from "../Redux/Actions/Spotify";

import { searchMusic } from "../Services/Services";

class Search extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.inputSearch = React.createRef();
  }

  componentDidMount() {
    const { pathname } = this.props.location;
    if (pathname === "/searches") {
      this.inputSearch.current.focus();
    }
  }

  onClick(e) {
    e.preventDefault();
    this.props.history.push("/searches");
  }

  onChange(e) {
    let queryText = e.target.value;
    this.props.setSearching(queryText);
    searchMusic(queryText).payload.then(result => {
      let searchApi = result.tracks.items;
      let songs = searchApi.filter((song, index) => {
        if (song.preview_url) {
          return song;
        }
        return null;
      });
      this.props.addResults(songs);
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let queryText = this.inputSearch.current.value;
    this.props.addSearches(queryText);
  }

  render() {
    return (
      <>
        <form className="form-inline mt-2 mt-md-0" onSubmit={this.onSubmit}>
          <input
            ref={this.inputSearch}
            className="form-control mr-sm-2"
            type="text"
            placeholder="Buscar"
            aria-label="Buscar"
            onClick={this.onClick}
            onChange={this.onChange}
          />
        </form>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => ({
  setSearching: searching => dispatch(setSearching(searching)),
  addSearches: text => dispatch(addSearches(text)),
  addResults: songs => dispatch(addResults(songs))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search)
);
