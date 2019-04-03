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

export const setSong = song => {
  return {
    type: actions.SET_PLAY,
    song: song
  };
};

export const getSong = () => {
  return {
    type: actions.GET_PLAY
  };
};

export const setSearching = text => {
  return {
    type: actions.SET_SEARCHING,
    text: text
  };
};
