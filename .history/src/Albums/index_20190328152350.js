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
          <table class="table table-dark table-striped table-hover">
            <tbody>
              <tr>
                <td>
                  <button type="button" className="btn btn-default btn-sm">
                    <i
                      className="fa fa-play-circle-o play-btn"
                      aria-hidden="true"
                    />
                  </button>
                </td>
                <td>John</td>
                <td>Doe</td>
                <td>3:30</td>
              </tr>
              <tr>
                <td>
                  <button type="button" className="btn btn-default btn-sm">
                    <span className="glyphicon glyphicon-music" />
                  </button>
                </td>
                <td>Mary</td>
                <td>Moe</td>
                <td>4:10</td>
              </tr>
              <tr>
                <td>
                  <button type="button" className="btn btn-default btn-sm">
                    <span className="glyphicon glyphicon-music" />
                  </button>
                </td>
                <td>July</td>
                <td>Dooley</td>
                <td>2:45</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Footer />
      </>
    );
  }
}
