import React from 'react'
import index from './index.css'
import { NavLink } from 'react-router-dom'
import gym from '../src/img/gym.jpg'
import MenuIcon from '@mui/icons-material/Menu';
import { Tooltip } from '@mui/material';
import TemporaryDrawer from './Settings_Button.jsx'

const Menu = () => {
    return (
        <>
            <div className='header'>

                <div className="left">
                    <img src={gym} alt="" />
                    <div>Indra Fitness</div>
                </div>
                <div className="mid">
                    <ul className="navbar">
                        <NavLink exact activeClassName="active" to="" style={{ textDecoration: 'none' }}><p>Home</p></NavLink>

                        <NavLink exact activeClassName="active" to="/about" style={{ textDecoration: 'none' }}><p>About Us</p></NavLink>

                        <NavLink exact activeClassName="active" to="/fitness" style={{ textDecoration: 'none' }}><p>Fitness Calculator</p></NavLink>

                        <NavLink exact activeClassName="active" to="/contact" style={{ textDecoration: 'none' }}><p>Contact Us</p></NavLink>

                    </ul>

                </div>

                <div className="right">
                    <button className="btn">Call us Now</button><button className="btn">Email</button>
                    <Tooltip title='settings'>
                        <button className='menu_list_all'><TemporaryDrawer /></button>
                    </Tooltip>
                </div>

            </div>
        </>
    )
}

export default Menu;