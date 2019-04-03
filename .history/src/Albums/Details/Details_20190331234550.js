import React, { Component } from "react";

import Header from "../Header";
import Footer from "../Footer";

export default class Details extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="App">
          <div className="container">
            <div className="row">
              <h1>Listado de canciones...</h1>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
