import actions from "./type";

export const setAlbums = albums => {
  return {
    type: actions.GET_ALBUMS,
    albums: albums
  };
};

export const getAlbums = () => {
  return {
    type: actions.LIST_ALBUMS
  };
};
