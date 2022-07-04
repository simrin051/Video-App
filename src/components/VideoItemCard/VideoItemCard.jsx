import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom';
import { WatchLaterButton } from './../WatchLaterButton';
import { NewPlaylistButton } from './../NewPlaylistButton';
import { addToHistoryPlaylist } from '../../services/playlist-service';
import { useVideoContext } from '../../contexts/videos';
import { useToast } from '../../contexts/toast';
import { LikeButton } from '../LikeButton';

export const VideoItemCard = () => {

    const location = useLocation();
    const params = location.state;
    const { url, thumbNail, channel } = params.video;
    const { videoStateDispatch } = useVideoContext();
    const { showToast } = useToast();
   
    return (<div className="video-player">
        <ReactPlayer class="video" controls height="20rem"
            url={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            onStart={()=>{addToHistoryPlaylist({video: params.video, videoStateDispatch, showToast })}}
        />
        <div class="action-btns">
            <LikeButton video={params.video}></LikeButton>
            <WatchLaterButton video={params.video}></WatchLaterButton>
            <NewPlaylistButton video={params.video}></NewPlaylistButton>
        </div>
        <br />
        <hr />
        <div class="video-detail">
            <img src={thumbNail} alt="thumbnail not loading" />
            <h2 class="thumbnail-title" >{channel}</h2>
        </div>
        <hr />

    </div>);
}