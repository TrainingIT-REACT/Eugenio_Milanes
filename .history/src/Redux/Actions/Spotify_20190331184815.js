import actions from "./type";

export const addSongs = songs => {
  return {
    type: actions.ADD_SONGS,
    songs: songs
  };
};

export const addAlbums = albums => {
  return {
    type: actions.ADD_ALBUMS,
    albums: albums
  };
};

export const listAlbums = () => {
  return {
    type: actions.LIST_ALBUMS
  };
};

export const listSongs = () => {
  return {
    type: actions.LIST_SONGS
  };
};

export const setPlaySong = song => {
  return {
    type: actions.SET_PLAY,
    song: song
  };
};

export const playSong = () => {
  return {
    type: actions.GET_PLAY
  };
};
