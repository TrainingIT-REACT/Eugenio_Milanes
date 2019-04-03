import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
// Css
import "./style.css";
class index extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="App">
          <div className="container">
            <div className="row">
              <h1>Plantilla de la práctica final!</h1>
              <table class="table">
                <thead>
                  <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                  </tr>
                  <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>mary@example.com</td>
                  </tr>
                  <tr>
                    <td>July</td>
                    <td>Dooley</td>
                    <td>july@example.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    albums: state.aplication.albums
  };
};

const mapDispatchToProps = dispatch => ({
  listAlbums: () => dispatch(listAlbums())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Songs);
