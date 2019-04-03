import React, { Component } from "react";
import { Provider } from "react-redux";

import Songs from "../Songs";
import Login from "../Login/Login";
import store from "../Redux/Stores/store";

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

  renderCompnents = () => {
    if (this.props.login) {
      return <Songs />;
    }
    return <Login />;
  };

  render() {
    return (
      <>
        <Provider store={store}>{this.renderCompnents()}</Provider>
      </>
    );
  }
}
