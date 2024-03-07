// src/components/Navbar/NavbarProfessional.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavbarProfessional = () => {
    return (
        <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="../Portfolio/Portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="../Services/Services.jsx">Services</Link>
          </li>
          <li>
            <Link to="../Skills/Skills.jsx">Skills</Link>
          </li>
          <li>
            <Link to="../Contact/Contact.jsx">Contact</Link>
          </li>
        </ul>
      </nav>
    );
};

export default NavbarProfessional;