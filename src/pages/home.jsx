import { Header } from "../components/header/header";
import { VideoListCard } from "../components/VideoItemCard/VideoListCard";
import { useVideoContext } from "../contexts/videos";
import { Link } from 'react-router-dom';
import './home.css';
import { useState } from "react";

export const Home = () => {
    const { state, videoStateDispatch } = useVideoContext();
    const [sideBarDisplay, setSidebarDisplay] = useState(false);
    
    let videoList = state.videoList;
   
    const getFilteredData = (videoList) => {
        return videoList.filter(video => video.categoryName == state.filterByCategory)
    }
    const getCategories = () => {
        return state.categoryList.map(category => category.categoryName);
    }

    const sideBarClose = () => {
        setSidebarDisplay(false);
    }

    function handleCallback() {
        setSidebarDisplay(true);
    }

    videoList = state.filterByCategory ? getFilteredData(videoList) : videoList;
    const skills = getCategories();
    return (
        <div>
            <Header parentCallback = {handleCallback}/>
            <div class="nav-container">
                <ul class="sidebar sidebar-nav-links">
                    <li><a class="sidebar-nav-link navbar-heading" href="#alerts"><i class="nav-icon fa fa-house"></i>Home</a></li>
                    <li><Link class="sidebar-nav-link" to="/playlist"><i class="nav-icon fa-brands fa-playstation"></i> Playlists</Link></li>
                    <li><Link class="sidebar-nav-link" to="/liked"><i class="nav-icon fa-solid fa-heart"></i>Liked</Link></li>
                    <li><Link class="sidebar-nav-link" to="/watchlater"><i class="nav-icon fa-solid fa-clock"></i>Watch Later</Link></li>
                    <li><Link class="sidebar-nav-link" to="/history"><i class="nav-icon fa-solid fa-clock-rotate-left"></i>History</Link></li>
                </ul>
                {sideBarDisplay && <div class="mobile-sidebar">
                    <div class="sidebar-nav-icons">
                        <i class="fl nav-icon far fa-user-circle fa-3x" aria-hidden="true"></i>
                        <i class="fr nav-icon fa fa-times fa-2x" aria-hidden="true" onClick={()=>sideBarClose()}></i>
                    </div>
                    <ul class="sidebar-nav-links">
                        <li><a class="sidebar-nav-link navbar-heading" href="#alerts"><i class="nav-icon fa fa-house"></i>Home</a></li>
                        <li><Link class="sidebar-nav-link" to="/playlist"><i class="nav-icon fa-brands fa-playstation"></i> Playlists</Link></li>
                        <li><Link class="sidebar-nav-link" to="/liked"><i class="nav-icon fa-solid fa-heart"></i>Liked</Link></li>
                        <li><Link class="sidebar-nav-link" to="/watchlater"><i class="nav-icon fa-solid fa-clock"></i>Watch Later</Link></li>
                        <li><Link class="sidebar-nav-link" to="/history"><i class="nav-icon fa-solid fa-clock-rotate-left"></i>History</Link></li>    
                    </ul>
                </div>}
                <div class="video-container">
                    <div class="filters">
                        {skills.map((skill) => {
                            return (
                                <span class="filter" value={skill} onClick={() => {
                                    videoStateDispatch({
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