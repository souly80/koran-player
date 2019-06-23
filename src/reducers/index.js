import { combineReducers } from "redux";
import tokenReducer from './tokenReducer';
import playlistReducer from './playlistReducer';
import songsReducer from './songsReducer';
import uiReducer from './uiReducer';
import browseReducer from './browseReducer';
import soundReducer from './soundReducer';

export default combineReducers({
  tokenReducer,
  playlistReducer,
  songsReducer,
  uiReducer,
  browseReducer,
  soundReducer
});
