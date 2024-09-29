import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoanApplication from './pages/LoanApplication';
import Dashboard from './pages/Dashboard';
import UserLoans from './pages/UserLoans';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/apply" element={<LoanApplication />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userloan" element={<UserLoans/> }/>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;

