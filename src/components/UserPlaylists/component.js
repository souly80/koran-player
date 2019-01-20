import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './UserPlaylists.css';

class UserPlaylists extends Component {

  constructor() {
    super();
    this.state = {
      selectedMenu: "سورة"
    }
  }

  clickHandler = (e) => {
    this.setState({
        selectedMenu: e.target.innerText
    });
    switch(e.target.innerText) {
        case "سورة": {
            this.props.fetchSongs();
            break;
        }
        case "أحزاب": {
            this.props.fetchAhzab();
             break;
        }
        case "اثمان": {
            this.props.fetchAthman();
            break;
        }
    }
  }

  renderPlaylists() {
    const playlistMenu = [
        {
            name: "سورة",
        },
        {
            name: "أحزاب",
        },
        {
            name: "اثمان",
        }]
    return playlistMenu.map(playlist => {

      return (
        <li onClick={(e) => this.clickHandler(e)} className={this.state.selectedMenu === playlist.name ? 'active side-menu-item' : 'side-menu-item'}  key={ playlist.name }>
          { playlist.name }
        </li>
      );
    });
  }

  render() {

    return (
      <div className='user-playlist-container'>
        <h3 className='user-playlist-header'>مصحف مقسم</h3>
        {
          this.renderPlaylists()
        }
      </div>
    );
  }
}

UserPlaylists.propTypes = {
  userId: PropTypes.string,
  token: PropTypes.string,
  title: PropTypes.string,
  playlistMenu:  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  fetchPlaylistsMenu: PropTypes.func,
  fetchPlaylistSongs: PropTypes.func,
  updateHeaderTitle: PropTypes.func
};

export default UserPlaylists;
