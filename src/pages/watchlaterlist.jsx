import { VideoWatchLaterCard } from "../components/VideoItemCard/VideoWatchLaterCard";
import { useToast } from "../contexts/toast";
import { useVideoContext } from "../contexts/videos";
import { removeFromWatchLaterList } from "../services/video-service";

export const WishLaterList = () => {
    const { state, videoStateDispatch } = useVideoContext();
    let videoList = state.itemsInWatchLaterList;
    const { showToast } = useToast();
    console.log(" video list " + videoList.length);
    return (<div class="videos-list">
        < h2 > Total number of items {videoList.length}</h2 >
        <div class="video-list-container">
            {videoList.map((video) => {
                return (<div class="badge-container"><VideoWatchLaterCard video={video}/>
                 <i class="video-delete-icon fa-solid fa-trash" aria-hidden="true" onClick={() => removeFromWatchLaterList({video, videoStateDispatch,showToast})} ></i>
                </div>)
            })}
        </div>
    </div >)

}