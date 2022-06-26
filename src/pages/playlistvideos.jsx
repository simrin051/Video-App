import { VideoWatchLaterCard } from "../components/VideoItemCard/VideoWatchLaterCard";
import { useVideoContext } from "../contexts/videos";
import { useLocation } from 'react-router-dom';

export const PlayListVideos = () => {
    const location = useLocation();
    const playlist = location.state.playlist;
    return (<div class="videos-list">
        {<div>< h2 > Total number of items {playlist.videos.length}</h2 >
        <div class="video-list-container">
            {playlist.videos.map((video) => {
                return <VideoWatchLaterCard video={video}></VideoWatchLaterCard>
            })}
        </div></div>}
    </div >)

}