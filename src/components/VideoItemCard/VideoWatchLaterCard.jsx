import { useVideoContext } from "../../contexts/videos";
import { removeFromWatchLaterList } from "../../services/video-service";

export const VideoWatchLaterCard = ({ video }) => {
    const { state, videoDispatch } = useVideoContext();
    return (
        <div class="card-horizontal">
            <div class="card-container-horizontal">
                <div class="image-badge-container">
                    <img src={video.thumbNail} />
                </div>
                <div class="text-container">
                    <span class="content-title">{video.title}</span>
                    <div class="action-btn-container">
                        <span class="sub-title">{video.categoryName}</span>
                        <i onClick={() => removeFromWatchLaterList(video, videoDispatch)} class="video-delete-icon fa-solid fa-trash"></i>
                    </div>
                </div>
            </div></div >)
}