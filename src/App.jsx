import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import WelcomePage from './components/WelcomePage';
import JudicialAuthority from './components/JudicialAuthority';
import UndertrialDashboard from './components/test';
import LegalAidDashboard from './components/one';
import PDF from './components/pdf';
import Appp from './components/pdf';
import Chat from './components/chatbor';
import Train from './components/train_3';
import UndertrialDashboar from './components/raja';
import Chatt from './components/last';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/undertrial-dashboard" element={<UndertrialDashboard />} />
      <Route path="/legal-aid-dashboard" element={<LegalAidDashboard />} />
      <Route path="/judicial-authority" element={<JudicialAuthority />} />
      
      
    </Routes>
  </Router>
  );
}

export default App;
