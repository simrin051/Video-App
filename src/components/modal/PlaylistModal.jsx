import { useState } from "react";
import { usePlaylistModal } from "../../contexts/playlistmodal";
import { useToast } from "../../contexts/toast";
import { useVideoContext } from "../../contexts/videos";
import { addVideoToPlayList, CreateNewPlaylist, removeVideoFromPlayList } from "../../services/playlist-service";
import { VideoInPlaylist } from "../../utils/utils";
import './modal.css';

export const PlaylistModal = () => {
    const {
        state: { listPlayList },
        videoStateDispatch,
    } = useVideoContext();
    const { setDisplayModal, displayModal,video, setVideo } = usePlaylistModal();
    var isVideoInPlaylist = false;
    const [playlist, setPlaylist] = useState({ title: "", description: "" });
    const [showCreatePlaylistForm, setShowCreatePlaylistForm] = useState(video ? false : true);
    const { showToast } = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (playlist.title === "")
            showToast({ title: "Playlist Title cannot be empty", type: "error" });
        else {
            setShowCreatePlaylistForm(false);
            CreateNewPlaylist({
                video,
                playlist,
                videoStateDispatch,
                showToast
            });
            setPlaylist({ title: "", description: "" });
            setDisplayModal(false);
            setVideo(undefined);
        }
    };

    const playlistCheckboxChanged=( playlistId,title,isVideoInPlaylist)=>{
        if (!isVideoInPlaylist) {
            // add video to playlist
            addVideoToPlayList({  playlistId, video, videoStateDispatch, showToast });
        } else {
            // remove video from playlist
            removeVideoFromPlayList({ playlistId, video, videoStateDispatch, showToast });
        }
    }

    const closeCreatePlaylistDialog = () => {
        setShowCreatePlaylistForm(false);
    }

    const closePlaylistDialog = () => {
        setDisplayModal(false);
    }
    
    return (
        <div  >{ displayModal && (
            <div class="container">
        
        <div className="flex-col modal-section-overlay"><div className="playlists-dialog-list">
        <i class="create-playlist-cross-icon fa fa-times" aria-hidden="true" onClick={()=>closePlaylistDialog()}></i>
            <h3 className="  playlist-title">PlayList</h3>
                 
            <div className="playlistmodal">{listPlayList.map((playlist) => {
                const {_id, title} = playlist;
                isVideoInPlaylist = VideoInPlaylist(
                    video._id,
                    playlist
                );
                return (
                        <div>
                        <input
                            defaultChecked = {isVideoInPlaylist}
                            type="checkbox"
                            onClick={()=>{playlistCheckboxChanged(_id,title,isVideoInPlaylist)}}
                        />
                        <span className="inline-m">{title}</span></div>
                  
                )
            })}  </div>
            <button id="playlist-btn" onClick={() => setShowCreatePlaylistForm(true)}>Add to new PlayList</button>
        </div ></div></div>)}
            {
                showCreatePlaylistForm && (<div className="flex-col modal-section-overlay"><form className="create-playlist-form" onSubmit={handleSubmit}>
                    <i class="create-playlist-cross-icon fa fa-times" aria-hidden="true" onClick={()=>closeCreatePlaylistDialog()}></i>
                    <input type="text" id="playListName" name="playlistName" value={playlist.title} placeholder="playlist name" onChange={(e) =>
                        setPlaylist({ ...playlist, title: e.target.value })} />
                    <input type="text" id="playListDesc" name="playListDesc" value={playlist.description} placeholder="playlist desc" onChange={(e) =>
                        setPlaylist({ ...playlist, description: e.target.value })} />
                    <button id="playlist-btn">Create</button>
                </form></div>)
            }
        </div>
    )
}