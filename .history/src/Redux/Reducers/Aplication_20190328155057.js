import type from "../Actions/type";

const initialState = {
  login: false,
  token: "",
  albums: []
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
      return {state.albums};
    default:
      return state;
  }
};

export default reducer;
