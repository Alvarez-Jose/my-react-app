// src/components/Home/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
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
  );
};

export default Home;


