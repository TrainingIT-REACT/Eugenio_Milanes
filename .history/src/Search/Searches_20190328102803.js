import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";

export default class Searches extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="App">
          <h1>Tus busquedas</h1>
          <p>busqueda ....</p>
          <p>busqueda ....</p>
          <p>busqueda ....</p>
          <p>busqueda ....</p>
        </div>
        <Footer />
      </>
    );
  }
}