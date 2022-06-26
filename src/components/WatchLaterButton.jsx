import { addToWatchLaterList,removeFromWatchLaterList } from "../services/video-service"
import { useVideoContext } from '../contexts/videos';
import { useToast } from "../contexts/toast";
import { VideoInWatchList } from "../utils/utils";

export const WatchLaterButton = ({ video }) => {
    const { state, videoStateDispatch } = useVideoContext();
    const { showToast } = useToast();
    const isVideoAddedToWatchLaterList = VideoInWatchList(video,state.itemsInWatchLaterList);
    return (
        <i class="nav-icon fa fa-clock" aria-hidden="true" style={{color: isVideoAddedToWatchLaterList? 'grey':'var(--primary-color)'}} onClick={()=>isVideoAddedToWatchLaterList?removeFromWatchLaterList({video, videoStateDispatch,showToast}):addToWatchLaterList({video, videoStateDispatch,showToast})}></i>
    )
}

