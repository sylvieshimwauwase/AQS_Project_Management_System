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
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg==" // You can replace this with the actual employee profile image
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

