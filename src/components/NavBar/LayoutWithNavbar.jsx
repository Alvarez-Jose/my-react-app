// src/components/LayoutWithNavbar.jsx
import React from 'react';
import NavbarCasual from './NavbarCasual';
import NavbarProfessional from './NavbarProfessional';

const LayoutWithNavbar = ({ children, isProfessional }) => {
  return (
    <div>
      {isProfessional ? <NavbarProfessional /> : <NavbarCasual />}
      {children}
    </div>
  );
};

export default LayoutWithNavbar;