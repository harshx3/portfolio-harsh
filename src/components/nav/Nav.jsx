import React from "react";
import Logo from '../../assets/images/Logo.png'
import { NavLink } from 'react-router-dom'


function Nav() {
    return(
        <nav className="navbar">
        <div>
            <img src={Logo} alt="logo" />
        </div>
     <div className="navDiv">
        <p><NavLink className='navLink' to='/'>Home</NavLink></p>
        <p><NavLink className='navLink' to='/projects'>Projects</NavLink></p>
        <p><NavLink className='navLink' to='/experience'>Experience</NavLink></p>
        <p><NavLink className='navLink' to='/about'>About Me</NavLink></p>
     </div>
    </nav>
    )
}

export default Nav;