import React from 'react';
import SongList from '../SongList';
import './MainView.css';

const MainView = ({audioControl, resumeSong, pauseSong, songs, typeOfKoran }) => {

  return (
    <div>
      <SongList typeOfKoran={typeOfKoran} songs={songs} resumeSong={ resumeSong } pauseSong={ pauseSong } audioControl={ audioControl } />
    </div>
  );

};

export default MainView;
