import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.onc = this.onClick.bind(this);
  }

  render() {
    return (
      <>
        <form className="form-inline mt-2 mt-md-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={this.onChange}
          />
        </form>
      </>
    );
  }
}
