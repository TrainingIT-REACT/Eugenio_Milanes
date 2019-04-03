import React from "react";
import { connect } from "react-redux";
import { getToken } from "../Redux/Actions/Spotify";

import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentWillMount() {
    this.props.getToken();
    console.log(this.props);
  }

  render() {
    return <></>;
  }
}

const mapStateToProps = state => {
  return {
    token: state.spotify.token
  };
};

const mapDispatchToProps = dispatch => ({
  getToken: () => dispatch(getToken())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
