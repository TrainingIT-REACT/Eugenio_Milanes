import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";

export default class Albums extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="App">
          <h1>ALBUMS!</h1>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://picsum.photos/200/150/?random"
                  />
                  <div className="card-block">
                    <h5 className="text-bold">Tawshif Ahsan Khan</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
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
              <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://picsum.photos/200/150/?random&#10;"
                    alt=""
                  />
                  <p className="card-block">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quam velit quisquam veniam excepturi temporibus inventore
                    corporis dicta sit culpa veritatis placeat earum, dolorum
                    asperiores, delectus dolore voluptatibus, at magnam nobis!
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://picsum.photos/200/150/?random&#10;"
                    alt=""
                  />
                  <div className="card-block">
                    <figure className="profile">
                      <img
                        src="https://picsum.photos/200/150/?random"
                        className="profile-avatar"
                        alt=""
                      />
                    </figure>
                    <h4 className="card-title mt-3">Tawshif Ahsan Khan</h4>
                    <div className="meta">
                      <a>Friends</a>
                    </div>
                    <div className="card-text">
                      Tawshif is a web designer living in Bangladesh.
                    </div>
                  </div>
                  <div className="card-footer">
                    <small>Last updated 3 mins ago</small>
                    <button className="btn btn-secondary float-right btn-sm">
                      show
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
                <div className="card card-inverse card-primary ">
                  <img
                    className="card-img-top"
                    src="https://picsum.photos/200/150/?random"
                    alt=""
                  />
                  <blockquote className="card-blockquote p-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat.
                    </p>
                    <footer>
                      <small>
                        Someone famous in{" "}
                        <cite title="Source Title">Source Title</cite>
                      </small>
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
                <div className="card card-inverse card-info">
                  <img
                    className="card-img-top"
                    src="https://picsum.photos/200/150/?random"
                    alt=""
                  />
                  <div className="card-block">
                    <figure className="profile">
                      <img
                        src="https://picsum.photos/200/150/?random"
                        className="profile-avatar"
                        alt=""
                      />
                    </figure>
                    <h4 className="card-title mt-3">Tawshif Ahsan Khan</h4>
                    <div className="meta card-text">
                      <a>Friends</a>
                    </div>
                    <div className="card-text">
                      Tawshif is a web designer living in Bangladesh.
                    </div>
                  </div>
                  <div className="card-footer">
                    <small>Last updated 3 mins ago</small>
                    <button className="btn btn-info float-right btn-sm">
                      Follow
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
                <div className="card card-inverse card-info">
                  <img
                    className="card-img-top"
                    src="https://picsum.photos/200/150/?random"
                    alt=""
                  />
                  <div className="card-block">
                    <figure className="profile profile-inline">
                      <img
                        src="https://picsum.photos/200/150/?random"
                        className="profile-avatar"
                        alt=""
                      />
                    </figure>
                    <h4 className="card-title">Tawshif Ahsan Khan</h4>
                    <div className="card-text">
                      Tawshif is a web designer living in Bangladesh.
                    </div>
                  </div>
                  <div className="card-footer">
                    <small>Last updated 3 mins ago</small>
                    <button className="btn btn-info float-right btn-sm">
                      Follow
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
                <div className="card card-inverse card-info">
                  <img
                    className="card-img-top"
                    src="https://picsum.photos/200/150/?random"
                  />
                  <div className="card-block">
                    <figure className="profile profile-inline">
                      <img
                        src="https://picsum.photos/200/150/?random"
                        className="profile-avatar"
                        alt=""
                      />
                    </figure>
                    <h4 className="card-title">Tawshif Ahsan Khan</h4>
                    <div className="card-text">
                      Tawshif is a web designer living in Bangladesh.
                    </div>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-info btn-sm">Follow</button>
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
