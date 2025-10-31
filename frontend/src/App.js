import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import ContactPage from './pages/ContactPage';
import { Toaster } from './components/ui/sonner';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/kontak" element={<ContactPage />} />
        </Routes>
        <Toaster position="top-center" richColors />
      </div>
    </Router>
  );
}