import { VideoPlaylistCard } from "../components/VideoItemCard/VideoPlaylistCard";
import { useToast } from "../contexts/toast";
import { useVideoContext } from "../contexts/videos";
import { removeFromLikedVideos } from "../services/video-service";
import './pages.css';

export const Liked = () => {
    const { state,videoStateDispatch } = useVideoContext();
    const { showToast } = useToast();
    let videoList = state.likedVideos;
    return (<div class="videos-list">
        < h2 > Total number of items {videoList.length}</h2 >
        <div class="video-list-container">
            {videoList.map((video) => {
                return (<div class="badge-container"><VideoPlaylistCard video={video}/>
                    <i class="video-delete-icon fa-solid fa-trash" aria-hidden="true" onClick={() => removeFromLikedVideos({video, videoStateDispatch,showToast})} ></i>
               </div> )
            })}
        </div>
    </div >)
}