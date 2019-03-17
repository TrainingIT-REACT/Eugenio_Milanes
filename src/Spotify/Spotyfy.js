export const albumReady = () => {
  const request = new Request(
    `https://api.spotify.com/v1/browse/new-releases`,
    {
      headers: new Headers({
        Authorization:
          "Bearer " +
          "BQDNywrrD7cQjKO1LFDXaJ5Ep0RbmDyNsEhFdI5fFR0tz7AfnDrmRVD2PFBSuNbXUY_u4GeOvNl-NHXtfiW2xRiT6rhWBcyRJ0hAYaNVxZu7HpdmXwhPSz0Dk2NtjPvKVG5WqokONn1Y1bAKRvf47TQwKOlHtQAK"
      })
    }
  );
  fetch(request)
    .then(res => {
      return res.json();
    })
    .then(res => {
      return res.albums.items;
    })
    .catch(err => {
      return err;
    });
};
