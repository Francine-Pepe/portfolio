import React from 'react';
import './NavBar.css';
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return(
        <>
        <div className="navigation_container">
            <div className="navbar_header">
                <div className="header_navigation">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/">Projects</NavLink></li>
                        <li><NavLink to="/">Skills</NavLink></li>
                        <li><NavLink to="/">Contact</NavLink></li>
                    </ul>
                </div>
                <div className="social_media">
                    <div className="social_icons">
                        <Icon className="social_icons_icons" icon="akar-icons:github-fill" color="#153b61" width="30" height="30" />
                        <Icon className="social_icons_icons" icon="entypo-social:linkedin-with-circle" color="#153b61" width="30" height="30" /> 
                        <Icon className="social_icons_icons" icon="ant-design:behance-circle-filled" color="#153b61" width="30" height="30" /> 
                        <Icon className="social_icons_icons" icon="entypo-social:instagram-with-circle" color="#153b61" width="30" height="30" /> 
                    </div>                 
                </div>
                
            </div>
        </div>
        
        
        
        </>
    );
}