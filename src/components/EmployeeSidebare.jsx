import React from 'react'
import './Sidebare.css';
function EmployeeSidebare() {
  return (
    <div>
        <div className="sidebar">
  {/* <div className="sidebar-header"> */}
    {/* <button className="menu-btn">
      &#9776;
    </button>
    <img src="logo.png" alt="AQS Logo" className="logo" />
  </div> */}
  <div className="profile-section">
    <div className="profile-pic">
      <img src="profile-pic.png" alt="Profile" />
    </div>
    <p className="employee-name">Name of Employee</p>
  </div>
  <nav className="nav-links">
    <a href="#" className="nav-item">
      <span className="nav-icon">📊</span>
      Dashboard
    </a>
    <a href="#" className="nav-item">
      <span className="nav-icon">📄</span>
      Projects
    </a>
    <a href="#" className="nav-item">
      <span className="nav-icon">🔔</span>
      Notifications
    </a>
    <a href="#" className="sign-out">Sign out</a>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <label for="darkMode">Dark mode</label>
    <input type="checkbox" id="darkMode" />
  </nav>
  
</div>

    </div>
  )
}

export default EmployeeSidebare