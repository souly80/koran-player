import React from 'react';
import SongControls from '../SongControls';
import './Footer.css';

const Footer = ({ stopSong, pauseSong, resumeSong, audioControl, getCurrentTime, setAudioTime}) => {
  return(
    <div className='footer'>
      <SongControls
        stopSong={ stopSong }
        pauseSong={ pauseSong }
        resumeSong={ resumeSong }
        audioControl={ audioControl }
        getCurrentTime={getCurrentTime}
        setAudioTime={setAudioTime}
      />
    </div>
  );
};
export default Footer;
