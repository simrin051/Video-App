
// Importing combination
import React, { Component } from 'react';
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useVideoContext } from "../contexts/videos";
import { AddToNewPlaylist, addVideoToPlayList, createNewPlaylist } from "../services/video-service";
export const ActionButton = (props) => {
    let playListName = '';
    const newPlayList = { title: "", description: "" }
    const [showPlaylist, setPlaylist] = React.useState(false);
    const [showNewPlaylistInput, setShowNewPlaylistInput] = React.useState(false);
    const showSideBar = () => {
        setPlaylist(!showPlaylist);
    }

    const AddToNewPlaylist = () => {
        setPlaylist(true);
        setShowNewPlaylistInput(true);
    }
    const createPlayList = document.getElementById('create-btn');

    const { state, videoDispatch } = useVideoContext();


    const findIdUsingPlaylistTitle = (title) => {
    }

    const createNewPlaylistBtnClick = () => {
        let titleOfNewlyCreatedPlaylist = document.getElementById("playlistName").innerText;
        // temp soln 
        titleOfNewlyCreatedPlaylist = 'XX';
        console.log(" titleOfNewlyCreatedPlaylist " + titleOfNewlyCreatedPlaylist);
        createNewPlaylist(titleOfNewlyCreatedPlaylist, "", videoDispatch);
        let idOfNewlyCreatedPlaylist = findIdUsingPlaylistTitle(titleOfNewlyCreatedPlaylist);
        console.log(" props video " + JSON.stringify(props.video));
        addVideoToPlayList(props.video, idOfNewlyCreatedPlaylist, videoDispatch)
    }

    let playlistDropdown = state.listPlayList ?? [];
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
                    <input type="text" id="playlistName" name="playlistName" placeholder="playlist name" />
                    <button id="create-btn" onClick={createNewPlaylistBtnClick}>Create</button>
                </div>}
            </div>
        </div >
    )
}