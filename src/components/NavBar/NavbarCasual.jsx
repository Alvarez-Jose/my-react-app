// src/components/Navbar/NavbarCasual.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavbarCasual = () => {
  return (
    <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="ResumeAndCertificates">Resume and Certificates</Link></li>
          <li><Link to="Portfolio">Portfolio</Link></li>
          <li><Link to="AboutMe">About Me</Link></li>
          <li><Link to="Contact">Contact</Link></li>
        </ul>
    </nav>
  );
};

export default NavbarCasual;


