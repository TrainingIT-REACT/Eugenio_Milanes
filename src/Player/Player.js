import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getLogin } from "../Redux/Actions/User";
import { getSong } from "../Redux/Actions/Spotify";

import "./styles.css";
class Player extends Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
    this.state = { isPlay: true, isClick: false };
    this.onClick = this.onClick.bind(this);
  }

  onClick(isPlay, song) {
    let { music } = song;
    if (music === null) {
      this.setState({ isPlay: true });
      return;
    }
    this.setState({ isPlay: !isPlay, isClick: !isPlay });
  }

  formatNumber = n => {
    return n.toLocaleString("es", {
      minimumIntegerDigits: 2,
      minimumFractionDigits: 0,
      useGrouping: false
    });
  };

  getPlayer() {
    let {
      song: { music, name, poster, play }
    } = this.props;

    return (
      <div className="shadow-lg bg-black rounded audio-player">
        <div className="player-controls scrubber">
          <p>{name}</p>
          <span>
            <audio ref={this.audio} src={music} controls autoPlay={play} />
          </span>
        </div>
        <div className="album-image">
          <img
            src={poster}
            className="border-0 float-left img-thumbnail"
            alt="..."
          />
        </div>
      </div>
    );
  }

  render() {
    return <>{this.getPlayer()}</>;
  }
}

const mapStateToProps = state => {
  return {
    song: state.aplication.song,
    login: state.aplication.login
  };
};

const mapDispatchToProps = dispatch => ({
  getSong: () => dispatch(getSong()),
  getLogin: () => dispatch(getLogin())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Player)
);
