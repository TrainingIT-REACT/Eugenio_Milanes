import React, { Component } from "react";

export default class Player extends Component {
  render() {
    return (
      <div>
        <div className="audio-player">
          <div id="play-btn" />
          <div className="audio-wrapper" id="player-container">
            <audio id="player">
              <source
                src="http://www.lukeduncan.me/oslo.mp3"
                type="audio/mp3"
              />
            </audio>
          </div>
          <div className="player-controls scrubber">
            <p>
              Oslo <small>by</small> Holy Esque
            </p>
            <span id="seekObjContainer">
              <progress id="seekObj" value="0" max="1" />
            </span>
            <br />
            <small className="start-time" />
            <small className="end-time" />
          </div>
          <div className="album-image">
            <img
              src="https://artwork-cdn.7static.com/static/img/sleeveart/00/051/614/0005161476_350.jpg"
              className="border-0 float-left img-thumbnail"
              alt="..."
            />
          </div>
        </div>
      </div>
    );
  }
}
