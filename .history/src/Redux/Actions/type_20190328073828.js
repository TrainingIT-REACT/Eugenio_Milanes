const nameType = [
  "GET_LOGIN",
  "SET_LOGIN",
  "SET_TOKEN",
  "GET_TOKEN",
  "SET_ALBUMS",
  "GET_ALBUMS"
];

const type = {};
nameType.map(action => {
  type[action] = action;
  return false;
});

export default type;
