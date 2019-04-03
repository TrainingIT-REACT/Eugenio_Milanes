import actions from "./type";

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
