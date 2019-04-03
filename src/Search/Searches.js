import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";

export default class Searches extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="App">
          <div className="container">
            <div className="row">
              <div class="col-8">
                <h5>Buscando: </h5>
              </div>
              <div class="col-4">
                <h5>Ultimas Busquedas</h5>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
