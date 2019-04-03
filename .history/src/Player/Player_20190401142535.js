import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

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

    console.log(this.audio);

    this.setState({ isPlay: !isPlay, isClick: !isPlay });
  }

  formatNumber = n => {
    return n.toLocaleString("es", {
      minimumIntegerDigits: 2,
      minimumFractionDigits: 0,
      useGrouping: false
    });
  };

  render() {
    let { isPlay, isClick } = this.state;
    let {
      song,
      song: { music, name, poster, durations, play }
    } = this.props;

    let mints = this.formatNumber(new Date(durations).getMinutes());
    let seconds = this.formatNumber(new Date(durations).getSeconds());
    var output = mints + ":" + seconds.padStart(2, 0);

    console.log(music);
    if (isClick) {
      play = !play;
    }

    return (
      <>
        <div className="shadow-lg bg-black rounded audio-player">
          <div
            className={!play ? "play-btn" : "pause"}
            onClick={
              (isPlay,
              event => {
                this.onClick(isClick, song);
              })
            }
          />
          <div className="audio-wrapper" id="player-container">
            <audio id="player">
              <source
                ref={audio}
                src="http://www.lukeduncan.me/oslo.mp3"
                type="audio/mp3"
              />
            </audio>
          </div>
          <div className="player-controls scrubber">
            <p>{name}</p>
            <span id="seekObjContainer">
              <progress id="seekObj" value="0" max="1" />
            </span>
            <br />
            <small className="start-time">00:00</small>
            <small className="end-time">{output}</small>
          </div>
          <div className="album-image">
            <img
              src={poster}
              className="border-0 float-left img-thumbnail"
              alt="..."
            />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    song: state.aplication.song
  };
};

const mapDispatchToProps = dispatch => ({
  getSong: () => dispatch(getSong())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Player)
);
