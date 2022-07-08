import React from "react";
import video from "../../videoicon.png";
import "./header.css";
import { Link } from 'react-router-dom';
import { useUserContext } from "../../contexts/user";


export const Header = () =>  {
    const showSideBar=(e)=> {
        this.props.parentCallback();
        e.preventDefault();
    }    
   const {state: {firstName}} = useUserContext();
return (<div class="nav-header">
        <div class="nav-brand">
            { <div class="header-menu-icon"><i class="fa-solid fa-bars nav-icon" onClick={showSideBar}></i></div>}
                <img src={video} alt="video_icon" />
                <span>Academia</span> 
        </div>
        <div class="fr  login-icon">
            {!firstName?  (<Link  to="/signin"><i class="fa-solid fa-circle-user"></i><span class="nav-icon-text">Login</span></Link>): (
            <span class="nav-icon-text">Hi, {firstName}</span>
            )}
        </div>
    </div>)
}