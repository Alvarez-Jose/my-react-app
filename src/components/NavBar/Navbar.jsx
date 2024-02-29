// src/components/Navbar/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/casual">Casual</Link>
        </li>
        <li>
          <Link to="/professional">Professional</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


