import React, { Component } from "react";

import Player from "../Player";

import "./style.css";
export default class Footer extends Component {
  constructor(props) {
    super(props);
    let player = this.props.player ? true : false;
    this.state = { player: player };
  }

  render() {
    let { player } = this.state;
    return (
      <>
        <footer className="bg-black footer mt-auto py-3 footer">
          <div className="container d-flex flex-column flex-md-row justify-content-between">
            {player ? <Player /> : <></>}
          </div>
        </footer>
      </>
    );
  }
}
