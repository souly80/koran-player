import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setToken } from './actions/tokenActions';
import {fetchSongsPending, fetchSongsSuccess, playSong, stopSong, pauseSong, resumeSong, fetchSurat, fetchAhzab, fetchAthman} from './actions/songActions';
import './App.css';

import Footer from './components/Footer';
import MainView from './components/MainView';
import MainHeader from './components/MainHeader';
import TabsWrappedLabel from "./components/tabs";
import {Howl} from 'howler';

class App extends Component {

	//static audio;
	static sound;


	newSound = (song) => {
		this.props.fetchSongsPending();
        this.sound = new Howl({
            src: [require(`../assets/${song.url}`)],
            autoplay: true,
            //loop,
            html5: true,
            volume: 0.9,
            onend: function() {
                console.log('Finished!');
            },
            onplay: () => {
            	this.props.fetchSongsSuccess();
                this.props.playSong(song);

            }
        })
		this.sound.play;
	};

    componentDidMount () {
        this.props.fetchSurat();
    }

	stopSong = () => {
	  if(this.sound) {
	    this.props.stopSong();
	    this.sound.pause();
	  }
	}

	pauseSong = () => {
	  if(this.sound) {
	    this.props.pauseSong();
	    this.sound.pause();
	  }
	}

	resumeSong = () => {
	  if(this.sound) {
	    this.props.resumeSong();
          this.sound.play();
	  }
	  else {
	  	this.audioControl(this.props.songs[0]);
	  }
	}

	setAudioTime = (time) => {
		this.sound.seek(time);
	}

	mapsAudio = [];

	audioControl = (song, loop) => {
	  const { playSong, stopSong } = this.props;

	  if(this.sound === undefined){
	    //playSong(song);
          this.newSound(song, loop);
      } else {
	    stopSong();
	    this.sound.pause();
	    //playSong(song);
          this.newSound(song, loop);

      }
      const audio = new Audio(require(`../assets/${song.url}`))
        audio.addEventListener("loadeddata", function(obj) {
            console.log(obj.currentTarget.duration);
        });
	}
	getCurrentTime = () => {
		return this.sound ? this.sound.seek() : 0;
	}

	render() {
	  return (
	  	<div>
            {
                this.props.loading ?
					<Loader
						type="Puff"
						color="#00BFFF"
						height="100"
						width="100"
					/>
                    :
					<div>
						<TabsWrappedLabel {...this.props} />
						<div className='App'>
							<div className='app-container'>
								<div className='main-section'>
									<div className='main-section-container'>
										<MainHeader
											pauseSong={this.pauseSong}
											resumeSong={this.resumeSong}
										/>
										<MainView
											pauseSong={this.pauseSong}
											resumeSong={this.resumeSong}
											audioControl={this.audioControl}
											songs={this.props.songs}
                                            typeOfKoran={this.props.typeOfKoran}
										/>
									</div>
								</div>
								<Footer
									stopSong={this.stopSong}
									pauseSong={this.pauseSong}
									resumeSong={this.resumeSong}
									audioControl={this.audioControl}
									getCurrentTime={this.getCurrentTime}
									setAudioTime={this.setAudioTime}
								/>
							</div>
						</div>
					</div>
            }
		</div>
	  );
	}
}

const mapStateToProps = (state) => {

  return {
    token: state.tokenReducer.token,
    volume: state.soundReducer.volume,
      songs: state.songsReducer.songs ? state.songsReducer.songs : '',
      typeOfKoran: state.songsReducer.typeOfKoran,
  };

};

const mapDispatchToProps = dispatch => {

  return bindActionCreators({
    setToken,
    playSong,
    stopSong,
    pauseSong,
    resumeSong,
      fetchSongsPending,
      fetchSongsSuccess,
      fetchSurat,
      fetchAhzab,
      fetchAthman
  },dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
