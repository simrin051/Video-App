import { PlayListCard } from "../components/VideoItemCard/PlayListCard";
import { useVideoContext } from "../contexts/videos";
import './pages.css';

export const PlayList = () => {
    const { state, videoDispatch } = useVideoContext();
    let playLists = state.listPlayList;
    console.log("inside playlist ");
    console.log(" list of play list ***********" + JSON.stringify(playLists));
    return (<div class="playlists">
        {playLists.map((playList) => {
            return <PlayListCard playList={playList}></PlayListCard >
        })}
    </div>);
}
