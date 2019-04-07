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

export const getSearching = () => {
  return {
    type: actions.GET_SEARCHING
  };
};

export const setSearching = text => {
  return {
    type: actions.SET_SEARCHING,
    text: text
  };
};

export const addSearches = text => {
  return {
    type: actions.ADD_SEARCHES,
    text: text
  };
};

export const listSearches = () => {
  return {
    type: actions.LIST_SEARCHES
  };
};

export const addResults = songs => {
  return {
    type: actions.ADD_RESULTS,
    songs: songs
  };
};

export const listResults = () => {
  return {
    type: actions.LIST_RESULTS
  };
};
