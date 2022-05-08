import ReactPlayer from 'react-player';
import { ActionButton } from './../ActionButton';


const state = {
    isOpen: false
};


export const VideoItemCard = ({ video }) => {
    console.log(video.url);
    return (<div className="video-player">
        <ReactPlayer class="video" controls height="40rem"
            url={video.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
        <ActionButton></ActionButton>
        <br />
        <hr />
        <div class="video-detail">
            <img src={video.thumbNail} alt="thumbnail not loading" />
            <h2 class="thumbnail-title" >{video.channel}</h2>
        </div>
        <hr />

    </div>);
}