import { Link } from 'react-router-dom';
import './ItemCard.css';
export const PlayListCard = ({ playList }) => {
    return <div class="playListCard">
        <Link to={{
            pathname: '/playlistvideos',
            playlist: playList
        }}>
            <div class="playListCard">
                <h2>{playList?.title}</h2>
            </div>
        </Link>
    </div>
}
