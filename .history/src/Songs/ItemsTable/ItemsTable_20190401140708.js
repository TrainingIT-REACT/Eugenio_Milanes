import React, { Component } from "react";
import { connect } from "react-redux";
import { setSong } from "../../Redux/Actions/Spotify";

class TableItems extends Component {
  constructor(props) {
    super(props);
    this.mouseOut = this.mouseOut.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
    let { picture } = this.props;

    this.state = {
      songs: [],
      icons: "fa-music",
      picture: picture,
      isPlay: false
    };
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

  onClick = (song, play) => {
    this.setState({ isPlay: !play });

    let { picture } = this.state;
    let previewUrl = song.preview_url ? song.preview_url : song.preview_url;
    let image = song.album ? song.album.images[1].url : picture;
    let playMusic = previewUrl !== null ? !play : false;
    let songSet = {
      music: previewUrl,
      poster: image,
      name: song.name,
      durations: song.duration_ms,
      play: playMusic
    };
    this.props.setSong(songSet);
    this.setState({ song: songSet });
  };

  render() {
    let { isPlay } = this.state;
    let { song } = this.props;
    let { name, album } = song;
    let date = "-";
    if (album) {
      date = album.release_date;
    }
    let timestamp = song.duration_ms;
    let mints = new Date(timestamp).getMinutes();
    let seconds = new Date(timestamp).getSeconds();
    var output = mints + ":" + seconds;
    let { icons } = this.state;
    let key = 0;

    return (
      <>
        <tr key={key}>
          <td>
            <button
              onClick={
                (song,
                event => {
                  this.onClick(song, isPlay);
                })
              }
              onMouseOut={
                (key,
                event => {
                  this.mouseOut(key);
                })
              }
              onMouseOver={
                (key,
                event => {
                  this.mouseOver(key);
                })
              }
              type="button"
              className="btn btn-outline-primary"
            >
              {" "}
              <i
                ref={(this["reference" + key] = React.createRef())}
                className={`fa ${icons}`}
              />
            </button>
          </td>
          <td>{name}</td>
          <td>{date}</td>
          <td>{output}</td>
        </tr>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => ({
  setSong: song => dispatch(setSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableItems);
