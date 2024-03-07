// src/components/Navbar/NavbarCasual.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavbarCasual = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="../Resume/Resume.jsx">Resume</Link>
        </li>
        <li>
          <Link to="../Portfolio/Portfolio.jsx">Portfolio</Link>
        </li>
        <li>
          <Link to="../AboutMe/AboutMe.jsx">About me</Link>
        </li>
        <li>
          <Link to="../Contact/Contact.jsx">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarCasual;


