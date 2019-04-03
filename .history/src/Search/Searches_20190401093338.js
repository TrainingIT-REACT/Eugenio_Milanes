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
              <div class="col-12">
                <h1>Tus busquedas</h1>
              </div>
              <div class="col-6">1 of 2</div>
              <div class="col-6">2 of 2</div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
