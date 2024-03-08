// src/components/AboutMe/AboutMe.jsx
import React from 'react';
import NavbarCasual from '../NavBar/NavbarCasual';

const AboutMe = () => {
  return (
      <div>
        {/* Include NavbarCasual */}
         <NavbarCasual />
        <h1>Test AboutMe</h1>
        {/* Add the content specific to the AboutMe route here */}
      </div>
   
  );
};

export default AboutMe;
