import React, { Component } from "react";
import { connect } from "react-redux";
import { setSong } from "../../Redux/Actions/Spotify";

class TableItems extends Component {
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
    let { song } = this.props;
    let { name } = song;
    let timestamp = song.duration_ms;
    let mints = new Date(timestamp).getMinutes();
    let seconds = new Date(timestamp).getSeconds();
    var output = mints + ":" + seconds;
    let { icons } = this.state;
    let key = 0;

    console.log(song);

    return (
      <>
        <tr key={key}>
          <td>
            <button
              onClick={
                (song,
                event => {
                  this.onClick(song);
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
          <td>{song.name}</td>
          <td>{song.album.release_date}</td>
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
