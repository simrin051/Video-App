import { Link } from "react-router-dom";

export const PlayListCard = (playlist) => {
    return (
        <div class="playListCard">
            <Link to={{
                pathname: '/playlistvideos',
                playlist: playlist
            }}>
                <div class="playListCard">
                </div>
            </Link>
        </div>
    )
} 