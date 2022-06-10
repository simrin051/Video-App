import { usePlaylistModal } from '../contexts/playlistmodal';
import { PlaylistModal } from './modal/PlaylistModal';


export const NewPlaylistButton = (video) => {
    console.log("new playlist button");

    const { setDisplayModal, setVideo } = usePlaylistModal();

    const showPlaylistModal = () => {
        console.log("inside show playlist modal");
        setDisplayModal(true); //This is the culprit .. when this was set as true
    }

    return (
        <div><i class="nav-icon fas fa-save" aria-hidden="true" onClick={() => showPlaylistModal()}></i>
            <PlaylistModal /></div>
    )

}


