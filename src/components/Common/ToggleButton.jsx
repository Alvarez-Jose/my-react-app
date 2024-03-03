// src/components/common/ToggleButton.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './ToggleButton.css';
import './ToggleButton.scss';
const ToggleButton = ({ to, label }) => {
    const [hover, setHover] = useState(false);
  
    const handleMouseEnter = () => {
      setHover(true);
    };
  
    const handleMouseLeave = () => {
      setHover(false);
    };
  
    return (
      <div
        className={`toggle-button collision-button ${hover ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link to={to}>{label}</Link>
        {hover && <span></span>}
      </div>
    );
  };
  
  export default ToggleButton;
