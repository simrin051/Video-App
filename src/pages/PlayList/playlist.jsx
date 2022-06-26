import { useVideoContext } from "../../contexts/videos";
import { PlayListCard } from "./playlistcard";
import { useEffect } from 'react';


export const PlayList = () => {

    const { state } = useVideoContext();
  
    return (<div class="container">
        {state.listPlayList?.length>0?< h2 className="totalPlaylist">Total number of items {state.listPlayList?.length}</h2 >: < h2 >No items in playlist</h2 >}
        <div class="playlist-container">
            {state.listPlayList.map((playlist) => {
                return <PlayListCard playlistDetail={playlist}></PlayListCard>
            })}
        </div>
    </div >)
}