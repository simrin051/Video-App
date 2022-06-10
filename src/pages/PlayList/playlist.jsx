import { useVideoContext } from "../../contexts/videos";
import { PlayListCard } from "./playlistcard";
import { useEffect } from 'react';
import { getAllPlayList } from './../../services/playlist-service';


export const PlayList = () => {
    const { state, videoDispatch } = useVideoContext();
    console.log("list playlist " + JSON.stringify(state));

    useEffect(() => {
        getAllPlayList(videoDispatch)
    }, []);

    return (<div class="videos-list">
        < h2 >wewewe Total number of items {state.listPlayList.length}</h2 >
        <div class="video-list-container">
            {state.listPlayList.map((playlist) => {
                return <PlayListCard playlistInfo={playlist}></PlayListCard>
            })}
        </div>
    </div >)
}