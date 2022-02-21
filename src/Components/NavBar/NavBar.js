import React from 'react';
import './NavBar.css';
import { Icon } from '@iconify/react';
// import { NavLink } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Link } from '@mui/material';




export default function NavBar() {
const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
    return(
        <>
        <div className="navigation_container">
            <div className="navbar_header">
                <div className="header_navigation">
                <BottomNavigation sx={{ width: 300, height: 80, backgroundColor: '#44CFCB'  }} value={value} onChange={handleChange}>
                <BottomNavigationAction
                    sx={{
                        "& .MuiBottomNavigationAction-root, .Mui-selected, svg": {
                          color: "#153B61",
                          fontFamily: 'Roboto Slab'
                        }
                     }}
                        label="About"
                        value="about"
                        icon={<Icon icon="maki:information" color="#f8f8f8" width="40" height="40" />}
                        />                    
                    <BottomNavigationAction 
                    sx={{
                        "& .MuiBottomNavigationAction-root, .Mui-selected, svg": {
                          color: "#153B61",
                          fontFamily: 'Roboto Slab',
                          }
                     }}
                        label="Projects"
                        value="projects"
                        icon={<Link to="./Projects"><Icon icon="ic:outline-computer" color="#F8F8F8" width="40" height="40" /></Link>}
                        />
                    <BottomNavigationAction
                    sx={{
                        "& .MuiBottomNavigationAction-root, .Mui-selected, svg": {
                          color: "#153B61",
                          fontFamily: 'Roboto Slab'
                        }
                     }}
                        label="Skills"
                        value="skills"
                        icon={<Icon icon="et:gears" color="#f8f8f8" width="40" height="40" />}
                        />
                    <BottomNavigationAction
                    sx={{
                        "& .MuiBottomNavigationAction-root, .Mui-selected, svg": {
                          color: "#153B61",
                          fontFamily: 'Roboto Slab'
                        }
                     }}
                        label="Contact"
                        value="contact"
                        icon={<Icon icon="clarity:email-line" color="#f8f8f8" width="40" height="40" />}
                        />
                        
                    </BottomNavigation>
                    
                    {/* <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/">Projects</NavLink></li>
                        <li><NavLink to="/">Skills</NavLink></li>
                        <li><NavLink to="/">Contact</NavLink></li>
                    </ul> */}
                </div>
                <div className="social_media">
                    <div className="social_icons">
                        <Icon className="social_icons_icons" icon="akar-icons:github-fill" color="#F8F8F8" width="30" height="30" />
                        <Icon className="social_icons_icons" icon="entypo-social:linkedin-with-circle" color="#F8F8F8" width="30" height="30" /> 
                        <Icon className="social_icons_icons" icon="ant-design:behance-circle-filled" color="#F8F8F8" width="30" height="30" /> 
                        <Icon className="social_icons_icons" icon="entypo-social:instagram-with-circle" color="#F8F8F8" width="30" height="30" /> 
                    </div>                 
                </div>
                
            </div>
        </div>
        
        
        
        </>
    );
}
