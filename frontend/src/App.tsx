import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoanApplication from './pages/LoanApplication';
import Dashboard from './pages/Dashboard';
import UserLoans from './pages/UserLoans';
import AdminDashboard from './pages/AdminDashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/apply" element={<LoanApplication />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userloan" element={<UserLoans/> }/>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;

