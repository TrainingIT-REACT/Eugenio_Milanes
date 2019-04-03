import React, { Component } from "react";
import "./App.css";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: true
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch("/albums");
      const json = await res.json();
      this.setState(prevState => ({
        ...prevState,
        loading: false,
        albums: json
      }));
    } catch (err) {
      console.error("Error accediendo al servidor", err);
    }
  }

  render() {
    return <></>;
  }
}
