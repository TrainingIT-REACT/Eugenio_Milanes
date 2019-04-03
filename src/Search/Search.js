import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setSearching } from "../Redux/Actions/Spotify";

class Search extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
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
    let textValue = e.target.value;
    console.log(textValue);
    this.props.setSearching(textValue);
  }

  render() {
    return (
      <>
        <form className="form-inline mt-2 mt-md-0">
          <input
            ref={this.inputSearch}
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
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
  setSearching: searching => dispatch(setSearching(searching))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search)
);
