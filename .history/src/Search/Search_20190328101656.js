import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <>
        <form className="form-inline mt-4 mt-md-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </>
    );
  }
}
