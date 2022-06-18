
import { useState } from 'react';
import { useVideoContext } from '../contexts/videos';
import { PlaylistModal } from './modal/PlaylistModal';
import { isVideoSaved } from './../utils/utils';
import { usePlaylistModal } from '../contexts/playlistmodal';


export const NewPlaylistButton = ({ video }) => {
    const [openModal, setOpenModal] = useState(false);
    const { setDisplayModal, setVideo } = usePlaylistModal();
    const { state, videoDispatch } = useVideoContext();
    const isSaved = isVideoSaved(video._id, state.listPlayList);
    const handlePlaylistModal = () => {
        console.log("inside handle playlistmodal");
        setVideo(video);
        setOpenModal(true);
    }
    return (
        <div className="playlistForm">
            <i style={isSaved ? { color: "grey" } : { color: "var(--primary-color)" }} class="nav-icon fas fa-save" aria-hidden="true" onClick={() => handlePlaylistModal()}></i>
            {openModal && <PlaylistModal closeModal={setOpenModal} openModal={openModal} />}
        </div >
    )
}
