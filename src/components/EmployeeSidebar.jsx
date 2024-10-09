// // import React from 'react'
// // import './Sidebare.css';
// // function Sidebare() {
// //   return (
// //     <div>
// //         <div class="sidebar">
// //   {/* <div class="sidebar-header"> */}
// //     {/* <button class="menu-btn">
// //       &#9776;
// //     </button>
// //     <img src="logo.png" alt="AQS Logo" class="logo" />
// //   </div> */}
// //   <div class="profile-section">
// //     <div class="profile-pic">
// //       <img src="profile-pic.png" alt="Profile" />
// //     </div>
// //     <p class="employee-name">Name of Employee</p>
// //   </div>
// //   <nav class="nav-links">
// //     <a href="#" class="nav-item">
// //       <span class="nav-icon">📊</span>
// //       Dashboard
// //     </a>
// //     <a href="#" class="nav-item">
// //       <span class="nav-icon">📄</span>
// //       Projects
// //     </a>
// //     <a href="#" class="nav-item">
// //       <span class="nav-icon">🔔</span>
// //       Notifications
// //     </a>
// //     <a href="#" class="sign-out">Sign out</a>
// //     <br>
// //     </br>
// //     <br>
// //     </br>
// //     <br>
// //     </br>
// //     <label for="darkMode">Dark mode</label>
// //     <input type="checkbox" id="darkMode" />
// //   </nav>
  
// // </div>

// //     </div>
// //   )
// // }

// // export default Sidebare


// import React from "react";
// import { FaHome, FaProjectDiagram, FaBell } from "react-icons/fa";

// const EmployeeSidebar = () => {
//   return (
//     <div className="sidebar">
//       <div className="profile">
//         <img src="employee-avatar.jpg" alt="Profile" />
//         <p>Name of Employee</p>
//       </div>
//       <nav>
//         <ul>
//           <li>
//             <FaHome /> Dashboard
//           </li>
//           <li>
//             <FaProjectDiagram /> Projects
//           </li>
//           <li>
//             <FaBell /> Notifications
//           </li>
//         </ul>
//       </nav>
//       <button className="logout-btn">Sign out</button>
//       <div className="dark-mode-toggle">
//         <label>
//           <input type="checkbox" /> Dark Mode
//         </label>
//       </div>
//     </div>
//   );
// };

// export default EmployeeSidebar;


import React from "react";
import { FaThLarge, FaProjectDiagram, FaBell, FaSignOutAlt } from "react-icons/fa";

const EmployeeSidebar = () => {
  return (
    <div style={styles.sidebarContainer}>
      {/* Profile Section */}
      <div style={styles.profileContainer}>
        <div style={styles.profileImageContainer}>
          <img
            src="https://via.placeholder.com/80" // You can replace this with the actual employee profile image
            alt="Employee Avatar"
            style={styles.profileImage}
          />
        </div>
        <p style={styles.profileName}>Name of Employee</p>
      </div>

      {/* Navigation Links */}
      <nav style={styles.navContainer}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <FaThLarge style={styles.icon} /> <span>Dashboard</span>
          </li>
          <li style={styles.navItem}>
            <FaProjectDiagram style={styles.icon} /> <span>Projects</span>
          </li>
          <li style={styles.navItem}>
            <FaBell style={styles.icon} /> <span>Notifications</span>
          </li>
        </ul>
      </nav>

      {/* Sign Out and Dark Mode Toggle */}
      <div style={styles.footerContainer}>
        <button style={styles.signOutButton}>
          <FaSignOutAlt style={styles.icon} /> <span>Sign out</span>
        </button>
        <div style={styles.darkModeContainer}>
          <span>Dark mode</span>
          <label style={styles.switch}>
            <input type="checkbox" />
            <span style={styles.slider}></span>
          </label>
        </div>
      </div>
    </div>
  );
};

// Inline Styles (you can use CSS/SASS if you prefer)
const styles = {
  sidebarContainer: {
    width: '220px',
    backgroundColor: '#2a3e5b',
    color: '#fff',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px',
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileImageContainer: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    overflow: 'hidden',
    marginBottom: '10px',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  profileName: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  navContainer: {
    marginTop: '20px',
  },
  navList: {
    listStyleType: 'none',
    padding: '0',
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0',
    cursor: 'pointer',
  },
  icon: {
    marginRight: '10px',
  },
  footerContainer: {
    marginTop: 'auto',
  },
  signOutButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  darkModeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  switch: {
    position: 'relative',
    display: 'inline-block',
    width: '40px',
    height: '20px',
    marginLeft: '10px',
  },
  slider: {
    position: 'absolute',
    cursor: 'pointer',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: '#ccc',
    borderRadius: '20px',
    transition: '.4s',
  },
  sliderChecked: {
    backgroundColor: '#2196F3',
  },
};

export default EmployeeSidebar;

