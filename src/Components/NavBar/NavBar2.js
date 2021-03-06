import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './NavBar2.css';
import { BottomNavigationAction, BottomNavigation, Link } from '@mui/material';
import { Icon } from '@iconify/react';



const drawerWidth = 80;
const drawerHeight = 600;

export default function NavBar2() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        
      </Box> */}
      <Drawer
        sx={{
          width: drawerWidth,
          height: drawerHeight,
          overflow: 'hidden',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            '& .MuiToolbar-root': {
              display: 'none',
              
            }
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Toolbar />
        <Divider />
        <List>
        <div className="header_navigation">
                <BottomNavigation sx={{ width: 80, height: 600, backgroundColor: '#44CFCB', display: 'flex', flexDirection: 'column'  }} value={value} onChange={handleChange}>
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
                        icon={<Icon icon="la:pencil-ruler" color="#f8f8f8" width="40" height="40" />}
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
                    </div>




          {/* {['About', 'Projects', 'Skills', 'Contact'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
        </List>
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
    </Box>
  );
}
