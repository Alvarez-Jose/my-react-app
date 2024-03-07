// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import CasualPage from './components/Casual/CasualPage';
import ProfessionalPage from './components/Professional/ProfessionalPage';
import './App.css';
import NavbarCasual from './components/NavBar/NavbarCasual';
import NavbarProfessional from './components/NavBar/NavbarProfessional';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import AboutMe from './components/AboutMe/AboutMe';
const App = () => {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/casual" element={<CasualPage />} />
          <Route path="/professional" element={<ProfessionalPage />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          {/* If you have a NotFound component, add a catch-all route */}
          {/* <Route path="*" element={<Navigate to="/404" />} /> */}
        </Routes>
        {/* Conditionally render the Navbar based on the route */}
        <Routes>
          <Route path="/casual/*" element={<NavbarCasual />} />
          <Route path="/professional/*" element={<NavbarProfessional />} />
          <Route path="/Portfolio/*" element={<Portfolio />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/AboutMe" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
