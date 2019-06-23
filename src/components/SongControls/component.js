import React, { Component } from 'react';
import moment from 'moment';
import './SongControls.css';
import {getDurationFotmatted} from "../../utils/utils";
import {progressWidth} from "../../utils/constants";


class SongControls extends Component {

	state = {
		loop: false,
	};

	componentWillReceiveProps(nextProps) {

	  /*if(!nextProps.songPlaying) {
	    clearInterval(this.state.intervalId);
	  }*/

	  if(nextProps.songPlaying && nextProps.timeElapsed === 0) {
	    clearInterval(this.state.intervalId);
	    this.calculateTime();
	  }

	}

	calculateTime = () => {
	  const intervalId  = setInterval(() => {
          const duration_ms = this.props.songDetails ? this.props.songDetails.duration : 0;
          let currentTime = this.props.getCurrentTime();
          if(!isNaN(currentTime)) {
              if (currentTime < duration_ms && currentTime !== 0) {
                  if (!this.props.songPaused) {
                      this.props.increaseSongTime(currentTime);
                  }
              } else {
                  this.props.increaseSongTime(0);
                  clearInterval(this.state.intervalId);
                  this.state.loop ? this.playSong() : this.nextSong();
              }
          }
	  }, 1000);

	  this.setState({
	    intervalId: intervalId
	  });

	}

	getSongIndex = () => {
	  const { songs, songDetails } = this.props;
	  const currentIndex = songs.map((song, index) => {
	    if(song === songDetails) {
	      return index;
	    }
	  }).filter(item => {
	    return item !== undefined;
	  })[0];

	  return currentIndex;
	}

	nextSong = () => {
	  const { songs , audioControl} = this.props;
	  let currentIndex = this.getSongIndex();
	  currentIndex === songs.length - 1 ? audioControl(songs[0], this.state.loop) : audioControl(songs[currentIndex + 1], this.state.loop);
	}

	prevSong = () => {
	  const { songs, audioControl } = this.props;
	  let currentIndex = this.getSongIndex();
	  currentIndex === 0 ? audioControl(songs[songs.length - 1], this.state.loop) : audioControl(songs[currentIndex - 1], this.state.loop);
	}

	loop = () => {
		this.setState({loop: !this.state.loop});
	}

    playSong = () => {
        const { songs, audioControl } = this.props;
        let currentIndex = this.getSongIndex();
        audioControl(songs[currentIndex], this.state.loop);
    }

	playHandhler = () => {
        if (!this.props.songPaused)
        	this.props.pauseSong();
        else {
            this.props.resumeSong();
            if (this.state.timeElapsed === 0) {
                clearInterval(this.state.intervalId);
            	this.calculateTime();
        	}
        }
	}

	getCurrentTime = () => {
        const duration_ms = this.props.songDetails ? this.props.songDetails.duration : 0;
        if(this.props.getCurrentTime() >= duration_ms ) {
        	return 0;
        }
        return this.props.getCurrentTime();
	}

    progressClickHandler = (e) => {
        const duration = this.props.songDetails ? this.props.songDetails.duration : 0;
        var rect = e.target.getBoundingClientRect();
        var x = e.clientX - rect.left;
		const time = (x * duration) / progressWidth;
		this.props.setAudioTime(time);
	}

	render() {

	  const showPlay = this.props.songPaused ? 'fa fa-play-circle-o play-btn' : 'fa fa-pause-circle-o pause-btn';
		const duration = this.props.songDetails ? this.props.songDetails.duration : 0;
        const seconds = parseInt(duration) //because moment js dont know to handle number in string format
        var format =  Math.floor(moment.duration(seconds,'seconds').asHours()) + ':' + moment.duration(seconds,'seconds').minutes() + ':' + moment.duration(seconds,'seconds').seconds();

        const replayClassName = this.state.loop ? "loop-green" : "forward";

        return (
	    <div className='song-player-container'>

	      <div className='song-details'>
	        <p className='song-name'>{ this.props.songDetails ? this.props.songDetails.title : '' }</p>
	      </div>

	      <div className='song-controls'>

			<div onClick={this.nextSong} className='next-song' >
			  <i className="fa fa-redo forward" aria-hidden="true" style={{"font-size": "100px", "margin-right": "100px"}}/>
			</div>

	        <div onClick={this.prevSong} className='reverse-song'>
	          <i className="fa fa-step-backward reverse" aria-hidden="true"  style={{"font-size": "100px"}}/>
	        </div>

	        <div className='play-btn'>
	          <i onClick={() => this.playHandhler()} className={"fa play-btn" + showPlay} aria-hidden="true" style={{"margin-left": "100px", "margin-right": "100px"}}/>
	        </div>

	        <div onClick={this.nextSong} className='next-song' >
	          <i className="fa fa-step-forward forward" aria-hidden="true" style={{"font-size": "100px", "margin-right": "100px"}}/>
	        </div>

			  <div onClick={this.loop} className='next-song' >
				  <i className= { replayClassName + " fa fa-random"} aria-hidden="true" style={{"font-size": "100px"}}/>
			  </div>

	      </div>

	      <div className='song-progress-container'>
	        <p className='timer-start'>{ getDurationFotmatted(this.getCurrentTime()) }</p>
	        <div className='song-progress' onClick={this.progressClickHandler} >
	          <div style={{ width: (this.getCurrentTime() * progressWidth) / duration }} className='song-expired' />
	        </div>
	        <p className='timer-end'>{format}</p>
	      </div>

	    </div>
	  );
	}
}
export default SongControls;
