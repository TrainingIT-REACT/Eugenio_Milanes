import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="bg-dark footer mt-auto py-3">
          <div className="container d-flex flex-column flex-md-row justify-content-between">
            <p className="float-right">Back to top</p>
            <p>&copy; 2017-2019 Company, Inc. &middot; Privacy</p>
          </div>
        </footer>
      </div>
    );
  }
}
