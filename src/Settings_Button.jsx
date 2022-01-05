import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
import index from './index.css'

import { NavLink } from "react-router-dom";

import { Route, Routes } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ListIcon from '@mui/icons-material/List';
import MenuIcon from '@mui/icons-material/Menu';

import InfoIcon from '@mui/icons-material/Info';
import CalculateIcon from '@mui/icons-material/Calculate';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({

        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Profile', 'Notifications'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <AccountCircleIcon /> : <NotificationsActiveIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Home', 'About us', 'Fitness Calculator', 'Contact Us'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>

                            {text === 'Home' ? <HomeIcon /> : text === 'About us' ? <InfoIcon /> : text === 'Fitness Calculator' ? <CalculateIcon /> : <AlternateEmailIcon />}

                        </ListItemIcon>
                       

                        {text === 'Home' ?  <NavLink exact activeClassName="active" to="" style={{ textDecoration: 'none' }}><ListItemText primary={text} /></NavLink> : text === 'About us' ? <NavLink exact activeClassName="active" to="/about" style={{ textDecoration: 'none' }}><ListItemText primary={text} /></NavLink> : text === 'Fitness Calculator'  ? <NavLink exact activeClassName="active" to="/fitness" style={{ textDecoration: 'none' }}><ListItemText primary={text} /></NavLink> :  <NavLink exact activeClassName="active" to="/contact" style={{ textDecoration: 'none' }}><ListItemText primary={text} /></NavLink>}

                       

                        

                        

                        

                    </ListItem>
                ))}
            </List>
        </Box>
    ); 

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button style={{ color: "white" }} onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}



