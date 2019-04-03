import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  async onClick(e) {
    e.preventDefault();
    this.props.setLogin(true);
    await 20;
    if (this.props.login) {
      this.props.history.push("/songs");
    }
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
