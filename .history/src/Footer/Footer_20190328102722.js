import React, { Component } from "react";

import "./style.css";
export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="bg-dark footer mt-auto py-3 footer">
          <div className="container d-flex flex-column flex-md-row justify-content-between">
            <p className="float-right">Back to top</p>
            <p>&copy; 2017-2019 Company, Inc. &middot; Privacy</p>
          </div>
        </footer>
      </>
    );
  }
}
