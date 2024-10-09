import React from 'react';
import EmployeeDashMain from '../Components/EmployeeDashMain';
import Sidebare from '../Components/Sidebare';
import Navbar from '../Components/Navbar';
import './EmployeeDash.css';

function EmployeeDashboard() {
  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <Navbar />
      </div>

      {/* Sidebar and Main Content side by side */}
      <div className="dashboard-container">
        <div className="sidebar">
          <Sidebare />
        </div>
        <div className="main-content">
          <EmployeeDashMain />
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
