import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useVideoContext } from '../../contexts/videos';
import { addToWatchLaterList } from '../../services/video-service';
import { useToast } from '../../contexts/toast';

export const VideoListCard = ({ video }) => {
    const { showToast } = useToast();
    const [isOpen, setIsOpen] = useState(false);
    const { state, videoStateDispatch } = useVideoContext();
    const itemsInWatchLaterList = state.itemsInWatchLaterList;
    const navigate = useNavigate();

    const toVideoDetailPage = (video) => {
        navigate('/video', { state: { video } });
    }

    return (<div className="video-thumbnail-view">
        <img class="video" onClick={() => { toVideoDetailPage(video) }}
            src={video.thumbNail} title="YouTube video player" alt="not loading"
        />
        <div class="video-channel-details">
            <img src={video.channelImage}></img>
            <span>{video.channel}</span>
            <div class="action-btn">
                <i class="fa fa-ellipsis-vertical" onClick={() => setIsOpen(!isOpen)}></i>
                <div class="menu-icon">
                    {isOpen && <div class="menu-nav-icon"><i class="fa-solid fa-clock" onClick={() => addToWatchLaterList({video, videoStateDispatch,showToast})}></i>{" "} Watch Later</div>}
                    {isOpen && <div class="menu-nav-icon"><i class="fa-solid fa-heart"></i>{" "}Liked Videos</div>}
                </div>
            </div>

        </div>
    </div >
    )
}