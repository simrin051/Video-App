
import ReactPlayer from 'react-player';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const VideoListCard = ({ video }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toVideoDetailPage = (video) => {
        navigate('/video', { state: { video } });
    }

    return (<div className="video-thumbnail-view" onClick={() => { toVideoDetailPage(video) }}>
        <img class="video"
            src={video.thumbNail} title="YouTube video player" alt="not loading"
        />
        <div class="video-channel-details">
            <img src={video.channelImage}></img>
            <span>{video.channel}</span>
            <div class="action-btn">
                <i class="fa fa-ellipsis-vertical" onClick={() => setIsOpen(!isOpen)}></i>
                <div class="menu-icon">
                    {isOpen && <div class="menu-nav-icon"><i class="fa-solid fa-clock"></i>{" "} Watch Later</div>}
                    {isOpen && <div class="menu-nav-icon"><i class="fa-solid fa-heart"></i>{" "}Liked Videos</div>}
                </div>
            </div>

        </div>
    </div >
    )
}