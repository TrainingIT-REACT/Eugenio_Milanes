import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getSong } from "../Redux/Actions/Spotify";

import "./styles.css";
class Player extends Component {
  constructor(props) {
    super(props);
    this.state = { isPlay: true, name: "", poster: "" };

    this.onClick = this.onClick.bind(this);
  }

  onClick(isPlay, song) {
    let { music, name, poster } = song;
    console.log(song);
    if (music !== null || music !== "") {
      console.log("111111111111111");

      this.setState({ isPlay: true });
      return;
    }
    console.log("2222222222");
    this.setState({ isPlay: !isPlay });
  }

  render() {
    let { isPlay } = this.state;
    let {
      song,
      song: { music, name, poster }
    } = this.props;

    if (music !== null || music !== "") {
      isPlay = false;
    }
    console.log(music);

    return (
      <>
        <div className="shadow-lg bg-black rounded audio-player">
          <div
            className={isPlay ? "play-btn" : "pause"}
            onClick={
              (isPlay,
              event => {
                this.onClick(isPlay, song);
              })
            }
          />
          <div className="audio-wrapper" id="player-container">
            <audio id="player">
              <source
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
            <small className="start-time" />
            <small className="end-time" />
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
