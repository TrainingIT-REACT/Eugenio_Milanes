import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setSearching, addSearches } from "../Redux/Actions/Spotify";

class Search extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.inputSearch = React.createRef();
    this.state = { searching: "" };
  }

  componentDidMount() {
    const { pathname } = this.props.location;
    if (pathname === "/searches") {
      this.inputSearch.current.focus();
    }
  }

  componentWillUnmount() {
    this.props.setSearching("");
  }

  onClick(e) {
    e.preventDefault();
    this.props.history.push("/searches");
  }

  onChange(e) {
    let textValue = e.target.value;
    this.setState({ searching: textValue });
    this.props.setSearching(textValue);
  }

  onSubmit(e) {
    e.preventDefault();
    let { searching } = this.state;
    this.props.addSearches(searching);
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
  addSearches: text => dispatch(addSearches(text))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search)
);
