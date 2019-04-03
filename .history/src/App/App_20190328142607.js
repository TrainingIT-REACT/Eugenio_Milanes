import React from "react";
import { connect } from "react-redux";
import { getToken } from "../Redux/Actions/Spotify";

import "./App.css";
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  render() {
    return <></>;
  }
}
