import { Header } from "../components/header/header"

export const Home = () => {
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
                <div class="filters">
                    <span class="filter">Reading</span>
                    <span class="filter">Writing</span>
                    <span class="filter">Speaking</span>
                    <span class="filter">Listening</span>
                </div>
            </div>
        </div >
    )
}