import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Icon } from '@iconify/react';
import './NavBar2.css';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='navigation_container'>
        
            <BottomNavigation className="navbar" sx={{ width: 500 }} value={value} onChange={handleChange}>
            <BottomNavigationAction
                label="Projects"
                value="projects"
                icon={<Icon icon="ic:outline-computer" color="#F8F8F8" width="50" height="50" />}
            />
            <BottomNavigationAction
                label="Favorites"
                value="favorites"
                icon={<FavoriteIcon />}
            />
            <BottomNavigationAction
                label="Nearby"
                value="nearby"
                icon={<LocationOnIcon />}
            />
            <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
            </BottomNavigation>
            <div className="social_media">
                <div className="social_icons">
                    <Icon className="social_icons_icons" icon="akar-icons:github-fill" color="#153b61" width="30" height="30" />
                    <Icon className="social_icons_icons" icon="entypo-social:linkedin-with-circle" color="#153b61" width="30" height="30" /> 
                    <Icon className="social_icons_icons" icon="ant-design:behance-circle-filled" color="#153b61" width="30" height="30" /> 
                    <Icon className="social_icons_icons" icon="entypo-social:instagram-with-circle" color="#153b61" width="30" height="30" /> 
                </div>                 
            </div>
        
    </div>
  );
}
