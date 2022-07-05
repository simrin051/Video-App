import { displayContentOfMaxLength } from "../../utils/utils";
import "./ItemCard.css";
export const VideoPlaylistCard = ({ video }) => {
    return (
        <div class="card-horizontal">
            <div class="card-container-horizontal">
                <div class="image-badge-container">
                    <img src={video.thumbNail} />
                    <i class="fa fa-play-circle fa-1x videoplayicon"></i>
                </div>
                <div class="text-container">
                        <span class="content-title">{displayContentOfMaxLength(video.title)}</span>
                    <div class="action-btn-container">
                        <span class="sub-title">{video.categoryName}</span>
                    </div>
                </div>
            </div></div >)
}

