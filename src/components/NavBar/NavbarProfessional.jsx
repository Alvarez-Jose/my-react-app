// src/components/Navbar/NavbarProfessional.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
//Home, Portfolio, Services, Skills, Contact
const NavbarProfessional = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
        <li>
          <Link to="/Skills">Skills</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarProfessional;