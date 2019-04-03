const nameType = [
  "GET_LOGIN",
  "SET_LOGIN",
  "SET_TOKEN",
  "GET_TOKEN",
  "ADD_ALBUMS",
  "LIST_ALBUMS",
  "ADD_SONGS",
  "LIST_SONGS",
  "SET_PLAY",
  "GET_PLAY"
];

const type = {};
nameType.map(action => {
  type[action] = action;
  return false;
});

export default type;
