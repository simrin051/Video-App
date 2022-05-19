import ReactPlayer from 'react-player';
import { ActionButton } from './../ActionButton';
import { useLocation } from 'react-router-dom';
import { useVideoContext } from '../../contexts/videos';

const state = {
    isOpen: false
};

export const VideoItemCard = () => {

    const location = useLocation();
    const params = location.state;
    const { state, videoDispatch } = useVideoContext();
    console.log("state items in playlist " + state.listPlayList);
    const playlistDropdown = state.listPlayList;
    console.log(" playlist dropdown " + JSON.stringify(playlistDropdown));
    return (<div className="video-player">
        <ReactPlayer class="video" controls height="20rem"
            url={params.video.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
        <ActionButton video={params.video} ></ActionButton>
        <br />
        <hr />
        <div class="video-detail">
            <img src={params.video.thumbNail} alt="thumbnail not loading" />
            <h2 class="thumbnail-title" >{params.video.channel}</h2>
        </div>
        <hr />

    </div>);
}