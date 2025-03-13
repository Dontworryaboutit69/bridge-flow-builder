
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Application from './pages/Application';
import PreQualification from './pages/PreQualification';
import DocumentCollection from './pages/DocumentCollection';
import ThankYou from './pages/ThankYou';
import NotFound from './pages/NotFound';
import AdminConsole from './pages/AdminConsole';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/application" element={<Application />} />
        <Route path="/prequalify" element={<PreQualification />} />
        <Route path="/documents" element={<DocumentCollection />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/admin" element={<AdminConsole />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
