import video from "../../videoicon.png";
import "./header.css";

export const Header = () => {
    return (<div class="nav-header">
        <div class="nav-brand">
            <img src={video} alt="video_icon" />
            <span>Academia</span>
        </div>
        <div class="login-icon">
            <i class="fa-solid fa-circle-user"></i>
        </div>
    </div>)
}
