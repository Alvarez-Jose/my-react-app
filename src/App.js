// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home/Home';
import CasualPage from './components/Casual/CasualPage';
import ProfessionalPage from './components/Professional/ProfessionalPage';
import Navbar from './components/NavBar/Navbar';
//import NotFound from './components/NotFound/NotFound'; // Import a NotFound component if needed
import './App.css';

const App = () => {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/casual" element={<CasualPage />} />
          <Route path="/professional" element={<ProfessionalPage />} />
          {/* If you have a NotFound component, add a catch-all route */}
          {/* <Route path="*" element={<Navigate to="/404" />} /> */}
        </Routes>
        {/* Conditionally render the Navbar based on the route */}
        <Routes>
          <Route path="/casual/*" element={<Navbar />} />
          <Route path="/professional/*" element={<Navbar />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
