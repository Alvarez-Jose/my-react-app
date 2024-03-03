// src/components/Home/Home.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Home.css';  // Import the styles for this component
import HomeBackground from './HomeBackGround';

const Home = () => {
  const location = useLocation();
  return (

    <div className="home-container">
      {/* Include the HomeBackground component */}
      <HomeBackground />

      {/* Your existing content */}
      {/*TODO*/}
      {/*Adjust button size*/}
      <div className="content">
        <h1>Welcome to My Portfolio</h1>
        <p>Choose your preferred view:</p>
        <div>
          <Link to="/casual">
            <button>Casual</button>
          </Link>
          <Link to="/professional">
            <button>Professional</button>
          </Link>
        </div>
      </div>

      {/* Include the provided HTML structure */}
      <link href='https://fonts.googleapis.com/css?family=Raleway:500,400,300,200,100' rel='stylesheet' type='text/css' />
      <canvas className="container" id="container" role="main"></canvas>
      <div className="content">
        <h1 className="title">Antonio Alvarez</h1>
        <p className="desc">Ambitious Software Engineer.</p>
        <ul className="contact">
          <li><a href="mailto:j.alvarezmaciel2@gmail.com">j.alvarezmaciel2@gmail.com</a></li>
          <li><a target="_top" href="https://github.com/Alvarez-Jose">GitHub</a></li>
          <li><a target="_top" href="https://www.linkedin.com/in/jose-alvarez-developer/">LinkedIn</a></li>
        </ul>
      </div>
      <div className="blur blurTop"><canvas className="canvas" id="blurCanvasTop"></canvas></div>
      <div className="blur blurBottom"><canvas width="1000px" height="1000px" className="canvas" id="blurCanvasBottom"></canvas></div>
    </div>
  );
};

export default Home;



