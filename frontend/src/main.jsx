// Main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Signup from './Signup/index.jsx'; // Import your Signup component
import Login from './Login/index.jsx'; // Import your Signup component
import Update from './Update/index.jsx'; // Import your Signup component
import Delete from './Delete/index.jsx'; // Import your Signup component
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </Router>
  </StrictMode>
);
