// Sidebar.js
import React from 'react';
import './HodSidebare.css';

const HodSidebare = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <i className="fas fa-user-circle"></i>
        <p>Name of the HOD</p>
      </div>
      <ul className="menu">
        <li>Dashboard</li>
        <li>Employee</li>
        <li>Projects</li>
        <li>Messages</li>
        <li>Schedule</li>
        <li>Report</li>
        <li>Sign out</li>
      </ul>
    </div>
  );
};

export default HodSidebare;
