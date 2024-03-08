import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Portfolio.css';
import NavbarCasual from '../NavBar/NavbarCasual';

const Portfolio = ({ navbar }) => {

  useEffect(() => {
    // Example logic based on the active navbar
    if (navbar && navbar.type === NavbarCasual) {
      // Handle casual navbar logic
      console.log('Casual Navbar is active!');
      // You can render specific content or perform actions here
    } else {
      // Handle default case (e.g., if neither navbar is active)
      console.log('Default Navbar is active!');
      // You can render default content or perform actions here
    }

  }, [navbar]); // Include navbar in the dependency array

  return (
    <div>
      {navbar}
      {/* Your portfolio content goes here */}
      <h1>Test Portfolio</h1>
    </div>
  );
};

export default Portfolio;


