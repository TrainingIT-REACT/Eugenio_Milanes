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
              <div className="col-sm-4">
                <div className="card">
                  <div className="view overlay">
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Others/food.jpg"
                      alt=""
                    />
                    <a>
                      <div className="mask rgba-white-slight" />
                    </a>
                  </div>

                  <a className="btn-floating btn-action ml-auto mr-4 mdb-color lighten-3">
                    <i className="fas fa-chevron-right pl-1" />
                  </a>

                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <hr />
                  </div>

                  <div className="rounded-bottom mdb-color lighten-3 text-center pt-3">
                    <ul className="list-unstyled list-inline font-small">
                      <li className="list-inline-item pr-2 white-text">
                        <i className="fa fa-clock pr-1" />
                        05/10/2015
                      </li>
                    </ul>
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
