import type from "../Actions/type";

const initialState = {
  login: false,
  user: {
    username: "Admin",
    password: "admin"
  },
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
  results: [],
  searching: "",
  lasts: []
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
    case type.SET_SEARCHING:
      return {
        ...state,
        searching: action.text
      };
    case type.GET_SEARCHING:
      return {
        searching: state.searching
      };
    case type.ADD_SEARCHES:
      console.log("ultimas busquedas", state.lasts);
      console.log("ultimas busquedas", action.text);
      return {
        ...state,
        lasts: state.lasts.concat(action.text)
      };
    case type.LIST_SEARCHES:
      return {
        lasts: state.lasts
      };

    case type.ADD_RESULTS:
      return {
        ...state,
        results: action.songs
      };
    case type.LIST_RESULTS:
      return {
        results: state.results
      };
    default:
      return state;
  }
};

export default reducer;
