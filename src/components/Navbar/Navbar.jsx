import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
        <h1><Link to="/">TODO MANAGER</Link></h1>
        <ul className='nav-menu'>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/add">ADD TODO</Link></li>
        </ul>
    </div>
  );
};

export default Navbar;
