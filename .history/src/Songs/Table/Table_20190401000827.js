import React, { Component } from "react";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.mouseOut = this.mouseOut.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
    this.state = { songs: [], icons: "fa-music" };
  }

  changeIconsButton = (key, removeItem, addItems) => {
    this["reference" + key].current.classList.remove(removeItem);
    this["reference" + key].current.classList.add(addItems);
  };
  mouseOver = key => {
    this.changeIconsButton(key, "fa-music", "fa-play");
  };

  mouseOut = key => {
    this.changeIconsButton(key, "fa-play", "fa-music");
  };

  onClick = song => {
    let songSet = {
      music: song.preview_url,
      poster: song.album.images[1].url,
      name: song.name
    };
    this.props.setSong(songSet);
    this.setState({ song: songSet });
  };
  render() {
    return <div />;
  }
}
