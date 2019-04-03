import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";

import "./styles.css";
export default class Albums extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="App">
          <div className="container">
            <div className="row">
              <div class="container-fluid m-y-3">
                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-lg-12 no-pad">
                    <div class="card hover-card">
                      <img
                        class="card-img-top img-responsive"
                        src="http://lorempixel.com/400/200/"
                        alt="Card image cap"
                      />
                      <h2 class="top">
                        Governor Cuomo Announces More Than $1 MillionGovernor
                        Cuomo Announces More
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
