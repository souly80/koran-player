import SongList from "./component";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchSurat } from '../../actions/songActions';

const mapStateToProps = (state) => {

  return {
    token: state.tokenReducer.token ? state.tokenReducer.token : '',
    fetchSongsError: state.songsReducer.fetchSongsError,
    fetchSongsPending: state.songsReducer.fetchSongsPending,
    fetchPlaylistSongsPending: state.songsReducer.fetchPlaylistSongsPending,
    songPlaying: state.songsReducer.songPlaying,
    songPaused: state.songsReducer.songPaused,
    songId: state.songsReducer.songId,
    viewType: state.songsReducer.viewType,
  };

};

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
      fetchSurat,
  }, dispatch);

};
export default connect(mapStateToProps, mapDispatchToProps)(SongList);
