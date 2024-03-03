// src/components/Professional/Professional.jsx
import React from "react";
import { Link } from 'react-router-dom';
import ToggleButton from "../Common/ToggleButton";
import './ProfessionalPage.css';

const ProfessionalPage = () => {
    return(
        <div>
        <h1>Professional Page</h1>
        {/* Adding the toggle button here */}
        <ToggleButton to="/casual" label="Switch to Casual" />
    </div>
    );
};

export default ProfessionalPage;