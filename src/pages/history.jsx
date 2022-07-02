import { VideoWatchLaterCard } from "../components/VideoItemCard/VideoWatchLaterCard";
import { useToast } from "../contexts/toast";
import { useVideoContext } from "../contexts/videos";
import { clearHistoryPlaylist } from "../services/playlist-service";
import './pages.css';

export const History = () => {
    const { state,videoStateDispatch } = useVideoContext();
    const { showToast } = useToast();
    let videoList = state.watchHistory;
    return (<div class="videos-list">
        < h2 > Total number of items {videoList.length}</h2 >
        {videoList.length>0 && <button class="clear-history-btn" onClick={()=>clearHistoryPlaylist({ videoStateDispatch, showToast })}>Clear History</button>}
        <div class="video-list-container">
            {videoList.map((video) => {
                return <VideoWatchLaterCard video={video}></VideoWatchLaterCard>
            })}
        </div>
    </div >)
}