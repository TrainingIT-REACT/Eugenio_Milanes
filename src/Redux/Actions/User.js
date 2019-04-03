import actions from "./type";

export const setLogin = login => ({
  type: actions.SET_LOGIN,
  login: login
});

export const getLogin = () => ({
  type: actions.GET_LOGIN
});
