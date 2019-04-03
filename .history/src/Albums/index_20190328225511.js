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
              <div className="col-sm-6 col-md-6 col-lg-5 mt-6">
                <div className="card hover-card">
                  <img
                    className="card-img-top img-responsive"
                    src="http://lorempixel.com/400/200/"
                    alt="Card image cap"
                  />
                  <a className="top">
                    Governor Cuomo Announces More Than $1 MillionGovernor Cuomo
                    Announces More
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-5 mt-6">
                <div className="card hover-card">
                  <img
                    className="card-img-top img-responsive"
                    src="http://lorempixel.com/400/200/"
                    alt="Card image cap"
                  />
                  <a className="top">
                    Governor Cuomo Announces More Than $1 MillionGovernor Cuomo
                    Announces More
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-5 mt-6">
                <div className="card hover-card">
                  <img
                    className="card-img-top img-responsive"
                    src="http://lorempixel.com/400/200/"
                    alt="Card image cap"
                  />
                  <a className="top">
                    Governor Cuomo Announces More Than $1 MillionGovernor Cuomo
                    Announces More
                  </a>
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
