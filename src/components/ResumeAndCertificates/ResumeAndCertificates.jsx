// src/components/Skills/Skills.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ResumeAndCertificates.css';
import ToggleButton from '../Common/ToggleButton';
import NavbarCasual from '../NavBar/NavbarCasual';

const ResumeAndCertificates = ({ navbar, children }) => {
    return (
        <div>
            {/* Include NavbarCasual */}
             <NavbarCasual />
            <h1>Test Resume And Certificates</h1>
            <ToggleButton to="/professional" label="Switch to Professional" />
        </div>
        
    );
};

export default ResumeAndCertificates;