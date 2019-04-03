import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";

export default class Albums extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="App">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-5 mt-6">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://picsum.photos/200/150/?random&#10;"
                    alt=""
                  />
                  <div className="card-block">
                    <h4 className="card-title">Tawshif Ahsan Khan</h4>
                    <div className="meta">
                      <a href="#">Friends</a>
                    </div>
                    <div className="card-text">
                      Tawshif is a web designer living in Bangladesh.
                    </div>
                  </div>
                  <div className="card-footer">
                    <span className="float-right">Joined in 2013</span>
                    <span>
                      <i className="" />
                      75 Friends
                    </span>
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
