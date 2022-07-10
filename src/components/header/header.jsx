import React from "react";
import video from "../../videoicon.png";
import "./header.css";
import { Link } from 'react-router-dom';
import { useUserContext } from "../../contexts/user";
import { useNavigate } from 'react-router-dom';

export const Header = () =>  {
    const showSideBar=(e)=> {
        this.props.parentCallback();
        e.preventDefault();
    }

    let navigate = useNavigate();
    const { state, userDispatch } = useUserContext();

    const logout=() => {
        userDispatch({
            type: "LOGOUT_USER",
            payload: ""
        });
        localStorage.removeItem("session");
        navigate('/signin');
    }
    
   const {state: {firstName}} = useUserContext();
return (<div class="nav-header">
        <div class="nav-brand">
            { <div class="header-menu-icon"><i class="fa-solid fa-bars nav-icon" onClick={showSideBar}></i></div>}
                <img src={video} alt="video_icon" />
                <span>Academia</span> 
        </div>
        <div class="login-icon">
            {!firstName?  (<Link  to="/signin"><i class="fa-solid fa-circle-user"></i><span class="nav-icon-text">Login</span></Link>): (
            <span class="nav-icon-text">Hi, {firstName}</span>
            )}
        </div>
        <i class="nav-icon fa-solid fa-arrow-right-from-bracket logout-btn" onClick={logout}></i>
    </div>)
}