import { useVideoContext } from "../../contexts/videos";
import { PlayListCard } from "./playlistcard";
import { useEffect } from 'react';
import { getAllPlayList } from './../../services/playlist-service';


export const PlayList = () => {

    const { state: { listPlayList }, videoStateDispatch } = useVideoContext();

    return (<div class="videos-list">
        < h2 >wewewe Total number of items {listPlayList.length}</h2 >
        <div class="video-list-container">
            {listPlayList.map((playlist) => {
                return <PlayListCard playlistInfo={playlist}></PlayListCard>
            })}
        </div>
    </div >)
}