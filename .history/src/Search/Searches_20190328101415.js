import React, { Component } from "react";
import Header from "../Header";

export default class Searches extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="App">
          <h1>Tus busquedas</h1>
          <p>busqueda ....</p>

          <p>busqueda ....</p>
          <h2>¿Dudas?</h2>
          <p>
            No olvides pasarte por el foro si tienes alguna duda sobre la
            práctica final o la plantilla :).
          </p>
        </div>
      </>
    );
  }
}
