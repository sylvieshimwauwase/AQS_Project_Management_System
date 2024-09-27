// import React, { useRef } from 'react';
// import { FaBars , FaBell, FaSearch, FaUserCircle} from 'react-icons/fa'

// function Navbar() {
//   return (
//     <nav className='bg-gray-800 px-4 py-3 flex justify-between ml-64'>
//       <div className='flex items-center text-xl'>
//         <FaBars  className='text-white me-4 cursor-pointer'/>
//         <span className='text-white font-semibold'>Africa Quantitative Science</span>
//       </div>
//       <div className='flex items-center gap-x-5'>
//         <div className='relative md:w-65'>
//            <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2'>
//             <button className='p-1 focus:outline-none text-white md:text-black'><FaSearch /></button></span>
//            <input type='text' className='w-full px-4 py-1 pl-12 rounded shadow  outline-none hidden md:block'/>
//            </div>

//            <div className='text-white'><FaBell className='w-6 h-6' /></div>
//            <div className='relative'>
//             <button className='text-white group'>
//                 <FaUserCircle className='w-6 h-6 mt-1' />

//            <div className='z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0'>
            
//            <ul className='py-2 text-sm text-gray-950'>
//              <li><a href='#'>Profile</a></li>
//              <li><a href='#'>Setting</a></li>
//              <li><a href='#'>Log Out</a></li>
//            </ul>
//             </div>
//            </button></div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar


// import React from 'react';
// import { FaBars, FaBell, FaSearch } from 'react-icons/fa';
// import './Navbar.css';

// function Navbar() {
//   return (
//     <nav className="bg-white shadow-md flex justify-between items-center px-6 py-3">
//       {/* Left Side: Logo and Hamburger Menu */}
//       <div className="flex items-center space-x-4">
//         {/* Logo */}
//         <img
//           src="/path/to/logo.png" // Replace with actual logo path
//           alt="AQS Logo"
//           className="h-8"
//         />
//         {/* Hamburger Menu Icon */}
//         <FaBars className="text-gray-600 cursor-pointer w-6 h-6" />
//       </div>

//       {/* Right Side: Search, Notifications, and User Profile */}
//       <div className="flex items-center space-x-6">
//         {/* Search Icon */}
//         <FaSearch className="text-gray-600 cursor-pointer w-6 h-6" />

//         {/* Notifications Icon */}
//         <FaBell className="text-gray-600 cursor-pointer w-6 h-6" />

//         {/* User Profile Section */}
//         <div className="flex items-center space-x-2">
//           {/* User Name */}
//           <span className="text-gray-700 font-medium">Esachiel Mutabazi</span>
//           {/* Profile Picture */}
//           <img
//             src="/path/to/profile.jpg" // Replace with actual profile picture path
//             alt="Profile"
//             className="w-8 h-8 rounded-full"
//           />
//           {/* Dropdown Icon */}
//           <button className="focus:outline-none">
//             <FaBars className="text-gray-600 w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggling dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className="top-nav">
      <div className="nav-left">
        <button className="menu-btn">
          <span className="menu-icon">&#9776;</span> {/* Sidebar button */}
        </button>
        <img src="download.png" alt="Logo" className="logo" />
      </div>

      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <button className="search-btn">
          <i className="search-icon">&#128269;</i> {/* Search Icon */}
        </button>
      </div>

      <div className="nav-right">
        <button className="nav-icon">
          <i className="notification-icon">&#128276;</i> {/* Notification Icon */}
        </button>

        <button className="nav-icon" onClick={toggleDarkMode}>
          {darkMode ? (
            <i className="light-mode-icon">&#9728;</i> // Sun icon for light mode
          ) : (
            <i className="dark-mode-icon">&#9790;</i> // Moon icon for dark mode
          )}
        </button>

        <button className="nav-icon">
          <i className="message-icon">&#128172;</i> {/* Message Icon */}
        </button>

        <div className="employee-profile">
          <img src="profile-pic-url" alt="Employee" className="profile-pic" />
          <span className="employee-email">Employee's Email</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
