import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark footer mt-auto py-3">
        <div className="container d-flex flex-column flex-md-row justify-content-between">
          <p className="float-right">
            <a>Back to top</a>
          </p>
          <p>
            &copy; 2017-2019 Company, Inc. &middot; <a>Privacy</a> &middot;{" "}
            <a>Terms</a>
          </p>
        </div>
      </footer>
    );
  }
}
