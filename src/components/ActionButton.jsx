
// Importing combination
import React, { Component } from 'react';
import { useState } from "react";
import { useToast } from "../contexts/toast";
import { useVideoContext } from '../contexts/videos';
import { CreateNewPlaylist } from '../services/playlist-service';

export const ActionButton = ({ video }) => {
    console.log(" video json " + JSON.stringify(video));
    const { showToast } = useToast();
    const [newPlayList, setNewPlayList] = useState({ title: "", description: "" });
    const [showPlaylist, setPlaylist] = React.useState(false);
    const [showNewPlaylistInput, setShowNewPlaylistInput] = React.useState(false);
    let playListName = '';
    const { state, videoDispatch } = useVideoContext();

    const showSideBar = () => {
        setPlaylist(!showPlaylist);
    }

    const AddToNewPlaylist = () => {
        setPlaylist(true);
        setShowNewPlaylistInput(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPlayList.title === '') {
            showToast({ title: "Playlist Title cannot be empty", type: "error" });
        } else {
            CreateNewPlaylist(newPlayList.title, newPlayList.description, video, videoDispatch, showToast);
        }
    }

    return (
        <div>
            <div class="action-btns">
                <i class="nav-icon fa fa-thumbs-up"></i>
                <i class="nav-icon fa fa-thumbs-down"><span>DISLIKE</span></i>
                <i className="nav-icon  fa fa-square-plus playlist-icon" onClick={showSideBar}></i>
                <i class="nav-icon fa fa-share-nodes"></i>
            </div>
            <div className="playlist" id="playlist">
                {showPlaylist
                }
                {showPlaylist && <li className="playlist-item" key="AddToNewPlaylist" onClick={AddToNewPlaylist}>Add to new playlist<br /></li>}
                {showPlaylist && showNewPlaylistInput && <div class="playlist-create" id="playlist-create">
                    <input type="text" id="playListName" name="playlistName" value={newPlayList.title} placeholder="playlist name" onChange={(e) =>
                        setNewPlayList({ ...newPlayList, title: e.target.value })} />
                    <input type="text" id="playListDesc" name="playListDesc" value={newPlayList.description} placeholder="playlist desc" onChange={(e) =>
                        setNewPlayList({ ...newPlayList, description: e.target.value })} />
                    <button id="create-btn" onClick={handleSubmit}>Create</button>
                </div>}
            </div>


        </div >
    )
}