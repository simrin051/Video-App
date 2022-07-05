import React from "react";
import video from "../../videoicon.png";
import "./header.css";


export class Header extends React.Component  {
    showSideBar=(e)=> {
        this.props.parentCallback();
        e.preventDefault();
    }    
render() {  
return (<div class="nav-header">
        <div class="nav-brand">
            { <div class="header-menu-icon"><i class="fa-solid fa-bars nav-icon" onClick={this.showSideBar}></i></div>}
                <img src={video} alt="video_icon" />
                <span>Academia</span> 
        </div>
        <div class="fr  login-icon">
            <i class="fa-solid fa-circle-user"></i>
        </div>
    </div>)
}
}