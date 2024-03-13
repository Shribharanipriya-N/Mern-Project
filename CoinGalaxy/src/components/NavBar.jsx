import React from 'react';
import { Link } from "react-router-dom";
import '../index.css';

const NavBar = () => {
  return (
    <>
    <header>
    <img src="../images/logo.jpeg" alt='logo'/>
    <ul id="items">
        <li ><Link to='/' className='navlink'>Home</Link></li>
        <li ><Link to='/about' className='navlink'>About</Link></li>
        <li ><Link to='/contact' className='navlink'>Contact</Link></li>
        <li ><Link to='/cart' className='navlink'>Cart</Link></li>
    </ul>
    </header>
    
    </>
  )
}

export default NavBar