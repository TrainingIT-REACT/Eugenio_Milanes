import React, { Component } from "react";

import Player from "../Player";

import "./style.css";
export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="bg-dark footer mt-auto py-3 footer">
          <div className="container d-flex flex-column flex-md-row justify-content-between" />
        </footer>
      </>
    );
  }
}
