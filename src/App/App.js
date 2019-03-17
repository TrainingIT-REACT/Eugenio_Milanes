import React, { Component } from "react";

// Css
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: []
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
    return (
      <>
        <Header />
        <Footer />
      </>
    );
  }
}

export default App;
