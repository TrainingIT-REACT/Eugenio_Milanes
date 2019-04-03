import { createAsyncAction } from "redux-promise-middleware-actions";

export const calculateToken = () => {
  let hashParams = {};
  let e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  if (hashParams.access_token) {
    return new Promise(resolve => {
      setTimeout(() => {
        localStorage.setItem("token", hashParams.access_token);
        return hashParams.access_token;
      }, 100);
    });
  }
  window.location.href =
    "https://accounts.spotify.com/authorize?client_id=230be2f46909426b8b80cac36446b52a&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:3000/callback";
};

export const getAlbumsList = createAsyncAction("GETS", async () => {
  const res = await fetch("https://api.spotify.com/v1/browse/new-releases", {
    headers: new Headers({
      Authorization: "Bearer " + localStorage.getItem("token")
    })
  });
  return res.json();
});