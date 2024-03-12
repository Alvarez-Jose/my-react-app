// src/components/Skills/Skills.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Skills.css'
import ToggleButton from '../Common/ToggleButton';

const Skills = () => {
    return (
        <div>
            {/* Include NavbarCasual */}
            <h1>Skills</h1>
            <ToggleButton to="/casual" label="Switch to casual" />
        </div>

    );
};

export default Skills;