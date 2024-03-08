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
import ResumeAndCertificates from './components/ResumeAndCertificates/ResumeAndCertificates';
import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';


const App = () => {
  return (
    <Router>
      <div>
        {/* Conditionally render the Navbar based on the route */}
        <Routes>
          <Route path="/casual/*" element={<AppWithNavbar navbar={<NavbarCasual />} />} />
          <Route path="/professional/*" element={<AppWithNavbar navbar={<NavbarProfessional />} />} />
          <Route path="/Portfolio/*" element={<Portfolio /> } />
        </Routes>

        {/* Define your other routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/casual" element={<CasualPage />} />
          <Route path="/professional" element={<ProfessionalPage />} />
          <Route path="/casual/Portfolio/*" element={<Portfolio navbar={<NavbarCasual />} />} />
          <Route path="/professional/Portfolio/*" element={<Portfolio navbar={<NavbarProfessional />} />} />
          <Route path="/ResumeAndCertificates/*" element={<ResumeAndCertificates />} />
          <Route path="/AboutMe/*" element={<AboutMe />} />
          <Route path="/Contact/*" element={<Contact />} />
          <Route path="/Skills/*" element={<Skills />} />
          <Route path="/Services/*" element={<Services />} />
          {/* ... other routes */}
          <Route path="/Protfolio/*" element={<Portfolio />} />
          <Route path="/casual" element={<CasualPage />} />
          <Route path="/professional" element={<ProfessionalPage />} />
          <Route path="/ResumeAndCertificates/*" element={<ResumeAndCertificates />} />
          <Route path="/AboutMe/*" element={<AboutMe />} />
          <Route path="/Contact/*" element={<Contact />} />
          <Route path="/Skills/*" element={<Skills />} />
          <Route path="/Services/*" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
};

const AppWithNavbar = ({ navbar, children }) => {
  return (
    <>
      {navbar}
      {children}
    </>
  );
};

export default App;




