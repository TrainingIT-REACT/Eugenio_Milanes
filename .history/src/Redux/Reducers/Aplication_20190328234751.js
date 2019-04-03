import type from "../Actions/type";

const initialState = {
  login: false,
  token: "",
  albums: [],
  songs: []
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
        albums: state.albums
      };
    default:
      return state;
  }
};

export default reducer;
