import React from 'react'
import logo from '../assets/logo1.jpg'
// import Development from './Development';
import './Components.css'
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import GroupsIcon from '@mui/icons-material/Groups';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";




const Header = () => {
  return (
    <div className='header'>
        <Router>
          <NavLink to='/'>
            <HomeIcon fontSize='large'className='header_icon'/>
          </NavLink>
          <NavLink to='#'>
            <GroupsIcon fontSize='large'className='header_icon'/>
          </NavLink>
          <img src={logo} className='header_logo' />
          <NavLink to='/development'>
            <ChildCareIcon fontSize='large'className='header_icon'/>
          </NavLink>
          <NavLink to='#'>
            <ForumIcon fontSize='large'className='header_icon'/>
          </NavLink>
          <Routes>
            {/* <Route exact path="/" element={<Home />} /> */}
            {/* <Route exact path="/development" element={<Development />} /> */}
            {/* <Route exact path="/contact" element={<Contact />} /> */}
          </Routes>
        </Router>
    </div>
  )
}

export default Header