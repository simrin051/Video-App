import ReactPlayer from 'react-player';
import { ActionButton } from './../ActionButton';
import { useLocation } from 'react-router-dom';

export const VideoItemCard = () => {

    const location = useLocation();
    const params = location.state;
    const { url, thumbNail, channel } = params.video;
    return (<div className="video-player">
        <ReactPlayer class="video" controls height="20rem"
            url={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
        <ActionButton video={params.video}></ActionButton>
        <br />
        <hr />
        <div class="video-detail">
            <img src={thumbNail} alt="thumbnail not loading" />
            <h2 class="thumbnail-title" >{channel}</h2>
        </div>
        <hr />

    </div>);
}