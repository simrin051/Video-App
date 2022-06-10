import { usePlaylistModal } from "../../contexts/playlistmodal";
import { useVideoContext } from "../../contexts/videos";
import { useState } from 'react';
import { useToast } from "../../contexts/toast";
import { CreateNewPlaylist } from "../../services/playlist-service";
import "./playlistModal.css";

export const PlaylistModal = () => {
    console.log("inside playlist modal");
    const [showCreatePlaylistForm, setShowCreatePlaylistForm] = useState(false);

    const {
        displayModal, setDisplayModal, video, setVideo
    } = usePlaylistModal();

    const { showToast } = useToast();
    const handleSubmit = (e) => {
        console.log("inside handle submit");
        e.preventDefault();
        if (playlist.title === "")
            showToast({ title: "Playlist Title cannot be empty", type: "error" });
        else {
            CreateNewPlaylist({
                video,
                playlist,
                videoDispatch,
                showToast,
            });
            setPlaylist({ title: "", desc: "" });
            setDisplayModal(false);
            setVideo(undefined);
        }
    };

    const [playlist, setPlaylist] = useState({ title: "", desc: "" });

    const {
        state: { listPlayList },
        videoDispatch,
    } = useVideoContext();


    return (<div id="id01" class="w3-modal">
        <div class="w3-modal-content">
            <div class="w3-container">
                <span onClick={
                    setDisplayModal(false)
                } ></span>

                {listPlayList.map(playlist => {
                    return (
                        <label>
                            <input type="checkbox" />
                            {playlist.title}
                        </label>
                    )
                })}

                <button id="create-btn" onClick={
                    setShowCreatePlaylistForm(true)
                }>Create a new playlist</button>

                {showCreatePlaylistForm &&
                    (<div><input type="text" id="playListName" name="playlistName" value={playlist.title} placeholder="playlist name" onChange={(e) =>
                        setPlaylist({ ...playlist, title: e.target.value })} />
                        <input type="text" id="playListDesc" name="playListDesc" value={playlist.description} placeholder="playlist desc" onChange={(e) =>
                            setPlaylist({ ...playlist, description: e.target.value })} />
                        <button id="create-btn" onClick={() => handleSubmit()}>Create</button></div>)}
            </div>
        </div >
    </div >)
}