import type from "../Actions/type";

const initialState = {
  login: false,
  token: "",
  albums: [],
  songs: [],
  song: {
    music: null,
    poster: null,
    name: null,
    durations: 0,
    play: false
  },
  searches: [],
  searching: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.IS_LOGIN:
      return {
        login: state.login
      };
    case type.SET_LOGIN:
      return {
        ...state,
        login: action.login
      };
    case type.ADD_ALBUMS:
      return {
        ...state,
        albums: action.albums
      };
    case type.LIST_ALBUMS:
      return {
        albums: state.albums
      };
    case type.ADD_SONGS:
      return {
        ...state,
        songs: action.songs
      };
    case type.LIST_SONGS:
      return {
        songs: state.songs
      };
    case type.SET_PLAY:
      return {
        ...state,
        song: action.song
      };
    case type.GET_PLAY:
      return {
        song: state.song
      };
    case type.LIST_SEARCHES:
      return {
        searches: state.searches
      };
    case type.ADD_ALBUMS:
      return {
        ...state,
        albums: action.albums
      };
    default:
      return state;
  }
};

export default reducer;
