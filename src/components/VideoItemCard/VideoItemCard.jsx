import ReactPlayer from 'react-player';
import { ActionButton } from './../ActionButton';
import { useLocation } from 'react-router-dom';

const state = {
    isOpen: false
};

export const VideoItemCard = () => {

    const location = useLocation();
    const params = location.state;

    return (<div className="video-player">
        <ReactPlayer class="video" controls height="20rem"
            url={params.video.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
        <ActionButton></ActionButton>
        <br />
        <hr />
        <div class="video-detail">
            <img src={params.video.thumbNail} alt="thumbnail not loading" />
            <h2 class="thumbnail-title" >{params.video.channel}</h2>
        </div>
        <hr />

    </div>);
}