// src/components/Services/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'
import ToggleButton from '../Common/ToggleButton';
import NavbarProfessional from '../NavBar/NavbarProfessional';

const Services = () => {
    return (
        <div>
            {/* Include NavbarCasual */} 
            <h1>Services</h1>
            <ToggleButton to="/casual" label="Switch to casual" />
        </div>
    );
};

export default Services;