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
              <div class="col-sm-3">
                <div class="card">
                  <div class="view overlay">
                    <img
                      class="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Others/food.jpg"
                      alt="Card image cap"
                    />
                    <a>
                      <div class="mask rgba-white-slight" />
                    </a>
                  </div>

                  <a class="btn-floating btn-action ml-auto mr-4 mdb-color lighten-3">
                    <i class="fas fa-chevron-right pl-1" />
                  </a>

                  <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <hr />
                  </div>

                  <div class="rounded-bottom mdb-color lighten-3 text-center pt-3">
                    <ul class="list-unstyled list-inline font-small">
                      <li class="list-inline-item pr-2 white-text">
                        <i class="far fa-clock pr-1" />
                        05/10/2015
                      </li>
                      <li class="list-inline-item pr-2">
                        <a href="#" class="white-text">
                          <i class="far fa-comments pr-1" />
                          12
                        </a>
                      </li>
                      <li class="list-inline-item pr-2">
                        <a href="#" class="white-text">
                          <i class="fab fa-facebook-f pr-1"> </i>21
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#" class="white-text">
                          <i class="fab fa-twitter pr-1"> </i>5
                        </a>
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
