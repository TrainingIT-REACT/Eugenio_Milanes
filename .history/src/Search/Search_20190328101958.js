import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.props.history.push("/songs");
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

export default withRouter(Search);
