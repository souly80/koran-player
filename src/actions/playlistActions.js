import uniqBy from 'lodash/uniqBy';

export const fetchPlaylistMenuPending = () => {
  return {
    type: 'FETCH_PLAYLIST_MENU_PENDING'
  };
};

export const fetchPlaylistMenuSuccess = (playlists) => {
  return {
    type: 'FETCH_PLAYLIST_MENU_SUCCESS',
    playlists
  };
};

export const fetchPlaylistMenuError = () => {
  return {
    type: 'FETCH_PLAYLIST_MENU_ERROR'
  };
};

export const addPlaylistItem = (playlist) => {
  return {
    type: 'ADD_PLAYLIST_ITEM',
    playlist
  };
};

export const fetchPlaylistsMenu = (userId, accessToken) => {
  return dispatch => {
    const request = new Request(`https://api.spotify.com/v1/users/${userId}/playlists`, {
      headers: new Headers({
        'Authorization': 'Bearer ' + accessToken
      })
    });

    dispatch(fetchPlaylistMenuPending());

    fetch(request).then(res => {
      if(res.statusText === "Unauthorized") {
        window.location.href = './';
      }
      return res.json();
    }).then(res => {
      dispatch(fetchPlaylistMenuSuccess(res.items));
    }).catch(err => {
      dispatch(fetchPlaylistMenuError(err));
    });
  };
};


export const fetchPlaylistSongsPending = () => {
  return {
    type: 'FETCH_PLAYLIST_SONGS_PENDING'
  };
};

export const fetchPlaylistSongsSuccess = (songs) => {
  return {
    type: 'FETCH_PLAYLIST_SONGS_SUCCESS',
    songs
  };
};

export const fetchPlaylistSongsError = () => {
  return {
    type: 'FETCH_PLAYLIST_SONGS_ERROR'
  };
};

export const fetchPlaylistSongs = (userId, playlistId, accessToken) => {
  return dispatch => {
      dispatch(fetchPlaylistSongsSuccess([{
        name: "test1"
      }]));
  };
};
