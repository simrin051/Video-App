import { VideoListCard } from "../components/VideoItemCard/VideoListCard";

export const PlayListVideos = ({ playlist }) => {
    return (<div class="playlists">
        {playlist.videos.map((video) => {
            return <VideoListCard video={video}></VideoListCard>
        })}
    </div>);
}