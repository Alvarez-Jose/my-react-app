//App.js
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
      <Routes>
          <Route path="/casual/*" element={<AppWithNavbar navbar={<NavbarCasual />} />} />
          <Route path="/professional/*" element={<AppWithNavbar navbar={<NavbarProfessional />} />} />
          <Route path="/Portfolio/*" element={<Portfolio /> } />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
      {/*Casual routes */}  
      <Route path="/casual/*" element={<CasualPage />} />
      <Route path="/casual/ResumeAndCertificates/*" element={<ResumeAndCertificates />} />
      <Route path="/casual/Portfolio/*" element={<Portfolio isProfessional={false} />} />
      <Route path="/casual/AboutMe/*" element={<AboutMe />} />
      <Route path="/casual/Contact/*" element={<Contact />} />

      {/*Professional routes */}
      <Route path="/professional/*" element={<ProfessionalPage />} />
      <Route path="/professional/Portfolio/*" element={<Portfolio isProfessional={true} />} />
      <Route path="/professional/Services/*" element={<Services />} />
      <Route path="/professional/Skills/*" element={<Skills />} />
      <Route path="/professional/Contact/*" element={<Contact />} />
      </Routes>
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




