import { Header } from "../components/header/header";
import { VideoItemCard } from "../components/VideoItemCard/VideoItemCard";
import { VideoListCard } from "../components/VideoItemCard/VideoListCard";
import { useVideoContext } from "../contexts/videos";
export const Home = () => {
    const { state, videoDispatch } = useVideoContext();

    const videoList = state.videoList;
    console.log(" video list length " + videoList.length);
    const skills = ['Reading', 'Writing', 'Speaking', 'Listening'];
    return (
        <div>
            <Header />
            <div class="nav-container">
                <ul class="sidebar sidebar-nav-links">
                    <li><a class="sidebar-nav-link navbar-heading" href="#alerts"><i class="nav-icon fa fa-house"></i>Home</a></li>
                    <li><a class="sidebar-nav-link" href="#alerts"><i class="nav-icon fa-brands fa-playstation"></i> Playlists</a></li>
                    <li><a class="sidebar-nav-link" href="#alerts"><i class="nav-icon fa-solid fa-heart"></i>Liked</a></li>
                    <li><a class="sidebar-nav-link" href="#alerts"><i class="nav-icon fa-solid fa-clock"></i>Watch Later</a></li>
                    <li><a class="sidebar-nav-link" href="#alerts"><i class="nav-icon fa-solid fa-clock-rotate-left"></i>History</a></li>
                </ul>
                <div class="video-container">
                    <div class="filters">
                        {skills.map((skill) => {
                            return (
                                <span class="filter" value={skill}>{skill}</span>
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

        </div>
    )
}