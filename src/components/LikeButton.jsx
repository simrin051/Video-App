import { addToLikedVideos, addToWatchLaterList,removeFromLikedVideos,removeFromWatchLaterList } from "../services/video-service"
import { useVideoContext } from '../contexts/videos';
import { useToast } from "../contexts/toast";
import { isVideoLiked } from "../utils/utils";

export const LikeButton = ({ video }) => {
    const { state, videoStateDispatch } = useVideoContext();
    const { showToast } = useToast();
    const isLiked = isVideoLiked(video,state.likedVideos);
   
    return ( 
        <i className={isLiked? "fa fa-heart" : "fa fa-thumbs-up"} style={{color: isLiked? 'red': 'var(--primary-color)'}} aria-hidden="true" onClick={()=>isLiked?removeFromLikedVideos({video, videoStateDispatch,showToast}):addToLikedVideos({video, videoStateDispatch,showToast})}></i>
    )
}


         