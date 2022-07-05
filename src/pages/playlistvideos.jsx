import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { VideoPlaylistCard } from "../components/VideoItemCard/VideoPlaylistCard";
import { useToast } from "../contexts/toast";
import { useVideoContext } from "../contexts/videos";
import { getVideosOfPlayList, removeVideoFromPlayList } from "../services/playlist-service";
import './pages.css';

export const PlayListVideos = () => {
    const location = useLocation();
    const playlist = location.state.playlist;
    const { state, videoStateDispatch } = useVideoContext();
    const { showToast } = useToast();

    useEffect(()=>{
         getVideosOfPlayList(playlist._id,videoStateDispatch);
    },[playlist])

    return (<div class="videos-list">
        {<div>< h2 > Total number of items {playlist.videos.length}</h2 >
        <div class="video-list-container">
            {playlist.videos.map((video) => {
               return (<div class="badge-container"><VideoPlaylistCard video={video}/>
               <i styleName={{backgroundColor:'red'}} class="video-delete-icon fa-solid fa-trash" aria-hidden="true" onClick={() => removeVideoFromPlayList({playlistId: playlist._id,playlist,video, videoStateDispatch,showToast})} ></i>
               </div> )
            })}
        </div></div>}
    </div >)

}

