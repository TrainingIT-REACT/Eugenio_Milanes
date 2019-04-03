import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getSong } from "../Redux/Actions/Spotify";
import moduleName from "../Services/Services";

import "./styles.css";
class Player extends Component {
  constructor(props) {
    super(props);
    this.state = { isPlay: true, name: "", poster: "" };

    this.onClick = this.onClick.bind(this);
  }

  async componentWillMount(prevProps, prevState) {
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAA");

    await 40;
    let { song } = this.props;
    console.log(song);

    this.setState({
      name: song.name,
      poster: song.poster
    });
  }

  handleKeyPress() {}

  onClick(isPlay) {
    this.setState({ isPlay: !isPlay });
  }

  render() {
    let { isPlay, name, poster } = this.state;
    return (
      <>
        <div className="audio-player">
          <div
            className={isPlay ? "play-btn" : "pause"}
            onClick={
              (isPlay,
              event => {
                this.onClick(isPlay);
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
