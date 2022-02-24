import React from "react";
import "./NavBar.css";
import { Icon } from "@iconify/react";
import Logo from "./../Images/Francine-Pêpe-(4).png";
// import { NavLink } from 'react-router-dom';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';

export default function NavBar() {
  // const [value, setValue] = React.useState('recents');

  //   const handleChange = (event, newValue) => {
  //     setValue(newValue);
  //   };

  return (
    <>
      <div className="logo">
        <a href="#about">
          <img className="logo_image" src={Logo} alt="francine_logo" />
        </a>
      </div>
      <div className="navigation_container">
        <div className="navbar_header">
          <div className="header_navigation">
            {/* <BottomNavigation sx={{ width: 550, height: 80, backgroundColor: '#44CFCB'  }} value={value} onChange={handleChange}>
                  
                <BottomNavigationAction
                    sx={{
                        "& .MuiBottomNavigationAction-root, .Mui-selected, svg": {
                          color: "#153B61",
                          fontFamily: 'Roboto Slab'
                        }
                     }}
                        label="About"
                        value="about"
                        icon={<a href="#about" rel="noreferrer noopener"><Icon icon="maki:information" color="#f8f8f8" width="40" height="40" /></a>}
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
                        icon={<a href="#projects" rel="noreferrer noopener"><Icon icon="ic:outline-computer" color="#F8F8F8" width="40" height="40" /></a>}
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
                        icon={<a href="#skills" rel="noreferrer noopener"><Icon icon="la:pencil-ruler" color="#f8f8f8" width="40" height="40" /></a>}
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
                        icon={<a href="#contact" rel="noreferrer noopener"><Icon icon="clarity:email-line" color="#f8f8f8" width="40" height="40" /></a>}
                        />
                        
                    </BottomNavigation> */}

            <ul>
              <li className="nav-item">
                <a href="#about">
                  <Icon
                    icon="maki:information"
                    color="#f8f8f8"
                    width="25"
                    height="25"
                    style={{ marginRight: "0.5rem" }}
                  />
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects">
                  <Icon
                    icon="ic:outline-computer"
                    color="#F8F8F8"
                    width="25"
                    height="25"
                    style={{ marginRight: "0.5rem" }}
                  />
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="#skills">
                  <Icon
                    icon="la:pencil-ruler"
                    color="#f8f8f8"
                    width="25"
                    height="25"
                    style={{ marginRight: "0.5rem" }}
                  />
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact">
                  <Icon
                    icon="clarity:email-line"
                    color="#f8f8f8"
                    width="25"
                    height="25"
                    style={{ marginRight: "0.5rem" }}
                  />
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:913db4c9-d862-35b8-9f6a-729cd31110cc" target="_blank" rel="noreferrer noopener">
                  <Icon
                    icon="fluent:document-text-20-regular"
                    color="#f8f8f8"
                    width="25"
                    height="25"
                  />
                  Resumé
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="social_media">
        <div className="social_icons">
          <a
            href="https://github.com/Francine-Pepe"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon
              className="social_icons_icons"
              icon="akar-icons:github-fill"
              color="#5987b6"
              width="30"
              height="30"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/francinemelopepe/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon
              className="social_icons_icons"
              icon="entypo-social:linkedin-with-circle"
              color="#5987b6"
              width="30"
              height="30"
            />
          </a>
          <a
            href="https://www.behance.net/francinepepe"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon
              className="social_icons_icons"
              icon="ant-design:behance-circle-filled"
              color="#5987b6"
              width="30"
              height="30"
            />
          </a>
          <a
            href="https://www.instagram.com/fran.e.a.canon.do.pai/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon
              className="social_icons_icons"
              icon="entypo-social:instagram-with-circle"
              color="#5987b6"
              width="30"
              height="30"
            />
          </a>
        </div>
      </div>
    </>
  );
}
