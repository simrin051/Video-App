
// Importing combination
import React, { Component } from 'react';
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useVideoContext } from "../contexts/videos";
import { AddToNewPlaylist } from "../services/video-service";
export const ActionButton = () => {
    let playListName = '';
    const [showPlaylist, setPlaylist] = React.useState(false);
    const [showNewPlaylistInput, setShowNewPlaylistInput] = React.useState(false);
    const showSideBar = () => {
        setPlaylist(!showPlaylist);
    }
    const AddToNewPlaylist = () => {
        setPlaylist(true);
        setShowNewPlaylistInput(true);
    }

    const getInputValue = (event) => {
        playListName = event.target.value;
        if (playListName.length > 2) {

        }
    };

    const { state, videoDispatch } = useVideoContext();
    let playlistDropdown = state.itemsInPlayList ?? [];
    console.log(" items in playlist from service" + state.itemsInPlayList);
    playlistDropdown = [...playlistDropdown, "Watch Later"]

    return (
        <div>
            <div class="action-btns">
                <i class="nav-icon fa fa-thumbs-up"></i>
                <i class="nav-icon fa fa-thumbs-down"><span>DISLIKE</span></i>
                <i className="nav-icon  fa fa-square-plus playlist-icon" onClick={showSideBar}></i>
                <i class="nav-icon fa fa-share-nodes"></i>
            </div>
            <div className="playlist" id="playlist">
                {showPlaylist &&
                    playlistDropdown.map((playlist) => (
                        <li className="playlist-item" key={playlist}>{playlist}<br /></li>
                    ))
                }
                {showPlaylist && <li className="playlist-item" key="AddToNewPlaylist" onClick={AddToNewPlaylist}>Add to new playlist<br /></li>}
                {showPlaylist && showNewPlaylistInput && <div class="playlist-create" id="playlist-create">
                    <input type="text" id="fname" name="fname" placeholder="playlist name" onChange={getInputValue} />
                    <button>Create</button>
                </div>}
            </div>
        </div >
    )
}