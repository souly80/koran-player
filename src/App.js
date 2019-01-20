import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchUser } from './actions/userActions';
import { setToken } from './actions/tokenActions';
import {playSong, stopSong, pauseSong, resumeSong, fetchSongs, fetchAhzab, fetchAthman} from './actions/songActions';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import UserPlaylists from './components/UserPlaylists';
import MainView from './components/MainView';
import ArtWork from './components/ArtWork';
import MainHeader from './components/MainHeader';
import SideMenu from './components/SideMenu';
import TabsWrappedLabel from "./components/tabs";

class App extends Component {

	static audio;

    componentDidMount () {
        this.props.fetchSongs();
    }
	componentWillReceiveProps(nextProps) {
	  if(this.audio !== undefined) {
	    this.audio.volume = nextProps.volume / 100;
	  }
	}

	stopSong = () => {
	  if(this.audio) {
	    this.props.stopSong();
	    this.audio.pause();
	  }
	}

	pauseSong = () => {
	  if(this.audio) {
	    this.props.pauseSong();
	    this.audio.pause();
	  }
	}

	resumeSong = () => {
	  if(this.audio) {
	    this.props.resumeSong();
          this.audio.play();
	  }
	  else {
	  	this.audioControl(this.props.songs[0]);
	  }
	}

	setAudioTime = (time) => {
		this.audio.currentTime = time;
	}

	audioControl = (song) => {
	  const { playSong, stopSong } = this.props;

	  if(this.audio === undefined){
	    playSong(song);
	    this.audio = new Audio(require(`../assets/${song.url}`));
	    this.audio.play();
	  } else {
	    stopSong();
	    this.audio.pause();
	    playSong(song);
          this.audio = new Audio(require(`../assets/${song.url}`));
          this.audio.play();
	  }
	}
	getCurrentTime = () => {
		return this.audio ? this.audio.currentTime : 0;
	}

	render() {
	  return (
	  	<div>
			<TabsWrappedLabel {...this.props} />
			<div className='App'>
			  <div className='app-container'>
				<div className='main-section'>
				  <div className='main-section-container'>
					<MainHeader
					  pauseSong={ this.pauseSong }
					  resumeSong={ this.resumeSong }
					/>
					<MainView
					  pauseSong={this.pauseSong}
					  resumeSong={ this.resumeSong }
					  audioControl={ this.audioControl }
					  songs={this.props.songs}
					/>
				  </div>
				</div>
				<Footer
				  stopSong={ this.stopSong }
				  pauseSong={ this.pauseSong }
				  resumeSong={ this.resumeSong }
				  audioControl={ this.audioControl }
				  getCurrentTime={ this.getCurrentTime }
				  setAudioTime={this.setAudioTime}
				/>
			  </div>
			</div>
		</div>
	  );
	}
}

App.propTypes = {
  token: PropTypes.string,
  fetchUser: PropTypes.func,
  setToken: PropTypes.func,
  pauseSong: PropTypes.func,
  playSong: PropTypes.func,
  stopSong: PropTypes.func,
  resumeSong: PropTypes.func,
  volume: PropTypes.number
};

const mapStateToProps = (state) => {

  return {
    token: state.tokenReducer.token,
    volume: state.soundReducer.volume,
  	songs: state.songsReducer.songs ? state.songsReducer.songs : '',
  };

};

const mapDispatchToProps = dispatch => {

  return bindActionCreators({
    fetchUser,
    setToken,
    playSong,
    stopSong,
    pauseSong,
    resumeSong,
	  fetchSongs,
      fetchAhzab,
      fetchAthman
  },dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
