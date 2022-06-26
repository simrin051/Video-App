import { Link } from "react-router-dom";
import './playlist.css';

export const PlayListCard = ({playlistDetail}) => {
    return (
            <Link to={{
                  pathname: '/playlistvideos'
            }}  state={{ playlist: playlistDetail}}>
                <div class="playListCardTitle">
                    {playlistDetail.title}
                </div>
            </Link>
    )
} 