import { Header } from "../components/header/header";
import { VideoListCard } from "../components/VideoItemCard/VideoListCard";
import { useVideoContext } from "../contexts/videos";
import { Link } from 'react-router-dom';

export const Home = () => {
    const { state, videoDispatch } = useVideoContext();
    let videoList = state.videoList;
    console.log("state items in playlist " + state.listPlayList);


    const getFilteredData = (videoList) => {
        return videoList.filter(video => video.categoryName == state.filterByCategory)
    }
    const getCategories = () => {
        return state.categoryList.map(category => category.categoryName);
    }

    videoList = state.filterByCategory ? getFilteredData(videoList) : videoList;
    const skills = getCategories();
    console.log(" Skills " + skills);
    return (
        <div>
            <Header />
            <div class="nav-container">
                <ul class="sidebar sidebar-nav-links">
                    <li><a class="sidebar-nav-link navbar-heading" href="#alerts"><i class="nav-icon fa fa-house"></i>Home</a></li>
                    <li><Link class="sidebar-nav-link" to="/playlists"><i class="nav-icon fa-brands fa-playstation"></i> Playlists</Link></li>
                    <li><Link class="sidebar-nav-link" to="/liked"><i class="nav-icon fa-solid fa-heart"></i>Liked</Link></li>
                    <li><Link class="sidebar-nav-link" to="/watchlater"><i class="nav-icon fa-solid fa-clock"></i>Watch Later</Link></li>
                    <li><Link class="sidebar-nav-link" to="/history"><i class="nav-icon fa-solid fa-clock-rotate-left"></i>History</Link></li>
                </ul>
                <div class="video-container">
                    <div class="filters">
                        {skills.map((skill) => {
                            return (
                                <span class="filter" value={skill} onClick={() => {
                                    videoDispatch({
                                        type: 'FILTER_BY_CATEGORY',
                                        payload: { skill }
                                    })
                                }}>{skill}</span>
                            )
                        })}
                    </div>
                    <div class="video-list-container">
                        {videoList.map((video) => {
                            return <VideoListCard video={video}></VideoListCard>
                        })}
                    </div>
                </div>
            </div>

        </div >
    )
}