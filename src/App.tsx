import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { LanguageProvider } from './components/LanguageContext';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import JohnsonsBaby from './components/JohnsonsBaby';
import FluencyAcademy from './components/FluencyAcademy';
import SiempreLibre from './components/SiempreLibre';
import Neutrogena from './components/Neutrogena';

function App() {
  return (
    <div className="App">
      <Router>
        <LanguageProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/protfolio" element={<Portfolio />} />
            <Route path="/johnsonsBaby" element={<JohnsonsBaby />} />
            <Route path="/fluencyAcademy" element={<FluencyAcademy />} />
            <Route path="/neutrogena" element={<Neutrogena />} />
            <Route path="/siempreLibre" element={<SiempreLibre />} />
          </Routes>
        </LanguageProvider>
      </Router>
    </div>
  );
}

export default App;
