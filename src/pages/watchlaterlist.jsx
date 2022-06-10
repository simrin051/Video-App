import { VideoWatchLaterCard } from "../components/VideoItemCard/VideoWatchLaterCard";
import { useVideoContext } from "../contexts/videos";

export const WishLaterList = () => {
    const { state, videoDispatch } = useVideoContext();
    let videoList = state.itemsInWatchLaterList;
    console.log(" video list " + videoList.length);
    return (<div class="videos-list">
        < h2 > Total number of items {videoList.length}</h2 >
        <div class="video-list-container">
            {videoList.map((video) => {
                return <VideoWatchLaterCard video={video}></VideoWatchLaterCard>
            })}
        </div>
    </div >)

}