// Common Navbar component
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const CommonNavbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        {/* Add other common links */}
      </ul>
    </nav>
  );
};

export default CommonNavbar;
