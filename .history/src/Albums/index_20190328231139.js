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
            <div class="row">
              <div class="col-md-3">
                <div class="card card-product">
                  <div class="card-image">
                    <a href="#">
                      {" "}
                      <img class="img" src="images/model01.jpg" />{" "}
                    </a>
                  </div>
                  <div class="table">
                    <h6 class="category text-rose">Clothing</h6>
                    <h4 class="card-caption">
                      <a href="#">The Name</a>
                    </h4>
                    <div class="card-description">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipis cingelit.
                      Etiam lacinia elit...{" "}
                    </div>
                    <div class="ftr">
                      <div class="price">
                        <h4>$1,230</h4>{" "}
                      </div>
                      <div class="stats">
                        <button
                          type="button"
                          rel="tooltip"
                          title=""
                          class="btn btn-just-icon btn-simple btn-warning"
                          data-original-title="Saved to Wishlist"
                        >
                          {" "}
                          <i class="fa fa-shopping-cart" />{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card card-product">
                  <div class="card-image">
                    <a href="#">
                      {" "}
                      <img class="img" src="images/model02.jpg" />{" "}
                    </a>
                    <div class="ripple-cont" />
                  </div>
                  <div class="table">
                    <h6 class="category text-muted">Clothing</h6>
                    <h4 class="card-caption">
                      <a href="#">The Name</a>
                    </h4>
                    <div class="card-description">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipis cingelit.
                      Etiam lacinia elit...{" "}
                    </div>
                    <div class="ftr">
                      <div class="price">
                        <h4>$990</h4>{" "}
                      </div>
                      <div class="stats">
                        <button
                          type="button"
                          rel="tooltip"
                          title=""
                          class="btn btn-just-icon btn-simple btn-default"
                          data-original-title="Save to Wishlist"
                        >
                          {" "}
                          <i class="fa fa-shopping-cart" />
                          <div class="ripple-cont" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card card-product">
                  <div class="card-image">
                    <a href="#">
                      {" "}
                      <img class="img" src="images/model03.jpg" />{" "}
                    </a>
                  </div>
                  <div class="table">
                    <h6 class="category text-muted">Clothing</h6>
                    <h4 class="card-caption">
                      <a href="#">The Name</a>
                    </h4>
                    <div class="card-description">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipis cingelit.
                      Etiam lacinia elit...{" "}
                    </div>
                    <div class="ftr">
                      <div class="price">
                        <h4>$1,100</h4>{" "}
                      </div>
                      <div class="stats">
                        <button
                          type="button"
                          rel="tooltip"
                          title=""
                          class="btn btn-just-icon btn-simple btn-warning"
                          data-original-title="Saved to Wishlist"
                        >
                          {" "}
                          <i class="fa fa-shopping-cart" />{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card card-product">
                  <div class="card-image">
                    <a href="#">
                      {" "}
                      <img class="img" src="images/model04.jpg" />{" "}
                    </a>
                  </div>
                  <div class="table">
                    <h6 class="category text-rose">Clothing</h6>
                    <h4 class="card-caption">
                      <a href="#">The Name</a>
                    </h4>
                    <div class="card-description">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipis cingelit.
                      Etiam lacinia elit...{" "}
                    </div>
                    <div class="ftr">
                      <div class="price">
                        <h4>$1,200</h4>{" "}
                      </div>
                      <div class="stats">
                        <button
                          type="button"
                          rel="tooltip"
                          title=""
                          class="btn btn-just-icon btn-simple btn-default"
                          data-original-title="Save to Wishlist"
                        >
                          {" "}
                          <i class="fa fa-shopping-cart" />{" "}
                        </button>
                      </div>
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
