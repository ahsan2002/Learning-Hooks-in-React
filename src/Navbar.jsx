import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.css';

const Navbar=()=>{
    return (
        <>
        <NavLink to='/'>About us</NavLink>
        <NavLink to='/contact'>Contact us</NavLink>
        <NavLink to='/user/'>User Section</NavLink>
        <br />
        {/* <a href="/">About Us</a>
        <a href="/contact">Contact Us</a> */}
        </>
    )
}

export default Navbar;