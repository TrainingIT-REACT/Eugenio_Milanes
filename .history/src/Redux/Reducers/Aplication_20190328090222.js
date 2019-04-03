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
    default:
      return state;
  }
};

export default reducer;
