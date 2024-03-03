// src/components/Casual/Casual.jsx
import React from "react";
import { Link } from 'react-router-dom';
import ToggleButton from '../Common/ToggleButton';
import './CasualPage.css';

const CasualPage = () => {
    return(
        <div>
            <h1>Casual Page</h1>
            {/* Adding the toggle button here */}
            <ToggleButton to="/professional" label="Switch to Professional" />
        </div>
    );
};

export default CasualPage;