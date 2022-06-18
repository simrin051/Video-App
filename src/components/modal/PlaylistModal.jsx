import { useState } from "react";
import './modal.css';
import { PlayList } from './../../pages/PlayList/playlist';
import { useVideoContext } from "../../contexts/videos";
import { usePlaylistModal } from "../../contexts/playlistmodal";
import { useToast } from "../../contexts/toast";
import { CreateNewPlaylist } from "../../services/playlist-service";


export const PlaylistModal = () => {
    const {
        state: { listPlayList },
        videoStateDispatch,
    } = useVideoContext();
    console.log("inside playlist modal");
    console.log(" list play list " + JSON.stringify(listPlayList));
    const { setDisplayModal, video, setVideo } = usePlaylistModal();

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

    // add to new  playlist form
    return (
        <div>{video && !showCreatePlaylistForm && (<div className="flex-col modal-section-overlay"><h3 className=" playlists-list playlist-title">PlayList</h3>

            {listPlayList.map((playlist) => {
                const [_id, title] = playlist;
                return (
                    <div>
                        <input
                            type={"checkbox"}
                        />
                        <span className="inline-m">{title}</span>
                    </div>
                )
            })}
            <button id="playlist-btn" onClick={() => setShowCreatePlaylistForm(true)}>Add to new PlayList</button>
        </div >)}

            {
                showCreatePlaylistForm && (<div className="flex-col modal-section-overlay"><form className="playlist-form" onSubmit={handleSubmit}>
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