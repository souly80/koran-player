import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './SongList.css';




class SongList extends Component {



  msToMinutesAndSeconds(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }


  renderSongs() {
    return this.props.songs.map((song, i) => {
      const buttonClass = song.id === this.props.songId && !this.props.songPaused ? "fa-pause-circle-o" : "fa-play-circle-o";

      return (
        <li onClick={() => {(song.id === this.props.songId) && this.props.songPlaying && this.props.songPaused ? this.props.resumeSong() :
            this.props.songPlaying && !this.props.songPaused && (song.id === this.props.songId)  ? this.props.pauseSong() :
                this.props.audioControl(song); } } className={song.id === this.props.songId ? 'active user-song-item' : 'user-song-item'} key={ i }>
            {
                song.id !== this.props.songId &&
                <i style={{"font-size":"40px"}} class="fa fa-music" aria-hidden="true"></i>
            }
          <div  className='play-song'>
            <i style={{"font-size":"70px", "color":"green"}} className={`fa ${buttonClass} play-btn`} aria-hidden="true"/>

          </div>

          <div style={{width: "15%"}}>
              {
                  song.id === this.props.songId && !this.props.songPaused &&
                  <div class="playing">
                    <div class="rect1"></div>
                    <div class="rect2"></div>
                    <div class="rect3"></div>
                    <div class="rect4"></div>
                    <div class="rect5"></div>
                  </div>
              }
          </div>
        {this.props.viewType !== 'songs' && (
            <p className='add-song' onClick={() => {this.props.addSongToLibrary(this.props.token, song.id);}}>
              {this.props.songAddedId === song.id ?
                (<i className="fa fa-check add-song" aria-hidden="true" />) :
                (<i className="fa fa-plus add-song" aria-hidden="true" />)
              }
            </p>
          )}



          <div className='song-length'>
            <p>{song.duration_ms}</p>
          </div>
          <div className='song-title'>
            <p>{ song.title }</p>
          </div>
        </li>
      );
    });
  }

  render() {

    return (
      <div>
        <div className='song-header-container'>
        </div>
        {
          this.props.songs && !this.props.fetchSongsPending && !this.props.fetchPlaylistSongsPending && this.renderSongs()
        }

      </div>
    );
  }
}

SongList.propTypes = {
  viewType: PropTypes.string,
  token: PropTypes.string,
  songAddedId: PropTypes.string,
  songId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  songs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  fetchSongsError: PropTypes.bool,
  fetchSongsPending: PropTypes.bool,
  fetchPlaylistSongsPending: PropTypes.bool,
  fetchSongs: PropTypes.func,
  audioControl: PropTypes.func,
  songPaused: PropTypes.bool,
  songPlaying: PropTypes.bool,
  resumeSong: PropTypes.func,
  pauseSong: PropTypes.func,
  addSongToLibrary: PropTypes.func,
};

export default SongList;
