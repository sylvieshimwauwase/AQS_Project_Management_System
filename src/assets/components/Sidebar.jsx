import React from 'react';
import { FaCalendar, FaHome, FaPoll, FaRegEnvelope, FaRegFileAlt, FaUsers, FaBars } from 'react-icons/fa';
// import ProfilePic from '../assets/images/img3.png'; 

function Sidebar({ isOpen, toggleSidebar }) {

  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };


  const handleSignOut = () => {
    console.log("User signed out");
    // Logic to sign out the user goes here (e.g., clear tokens, redirect)
  };
  return (
    <div className={`bg-[#264667] transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'} h-full px-4 py-2 fixed`}>
      <div className='logo-container'>
      <img src="../assets/images/download.png" alt="AQS Logo" className="w-12 h-12" />

      </div>
      <div className='my-4 flex justify-between items-center'>
        <h1 className={`text-xl text-white font-semibold transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
          HOD DASHBOARD
        </h1>
        <FaBars className="text-white cursor-pointer" onClick={toggleSidebar} />
      </div>
      <hr className="mb-4" />

            {/* Profile Section
            <div className={`flex items-center space-x-4 mt-4 mb-6 ${isOpen ? '' : 'hidden'}`}>
        <img src={ProfilePic} alt="Profile" className="w-10 h-10 rounded-full" />
        <div>
          <h2 className="text-white text-sm font-semibold">John Doe</h2>
          <button onClick={handleSignOut} className="text-xs text-gray-300 hover:underline">
            Sign Out
          </button>
        </div>
      </div> */}
          <ul className={`space-y-4 text-white font-semibold   ${!isOpen ? 'flex flex-col items-center' : ''}`}>
        <li className='flex items-center px-4 py-3 rounded-md hover:bg-blue-500 cursor-pointer'>
          <FaHome className='w-6 h-6' />
          {isOpen && <span className='ml-4'>Dashboard</span>}
        </li>
        <li className='flex items-center px-4 py-3 rounded-md hover:bg-blue-500 cursor-pointer'>
          <FaUsers className='w-6 h-6' />
          {isOpen && <span className='ml-4'>Employee</span>}
        </li>
        <li className='flex items-center px-4 py-3 rounded-md hover:bg-blue-500 cursor-pointer'>
          <FaPoll className='w-6 h-6' />
          {isOpen && <span className='ml-4'>Projects</span>}
        </li>
        <li className='flex items-center px-4 py-3 rounded-md hover:bg-blue-500 cursor-pointer'>
          <FaRegEnvelope className='w-6 h-6' />
          {isOpen && <span className='ml-4'>Messages</span>}
        </li>
        <li className='flex items-center px-4 py-3 rounded-md hover:bg-blue-500 cursor-pointer'>
          <FaCalendar className='w-6 h-6' />
          {isOpen && <span className='ml-4'>Schedule</span>}
        </li>
        <li className='flex items-center px-4 py-3 rounded-md hover:bg-blue-500 cursor-pointer'>
          <FaRegFileAlt className='w-6 h-6' />
          {isOpen && <span className='ml-4'>Report</span>}
        </li>
      </ul>

       {/* Dark Mode Toggle */}
      <div className={`flex items-center justify-between mt-auto ${isOpen ? 'block' : 'hidden'}`}>
        <span className="text-white">Dark Mode</span>
        <button onClick={handleDarkModeToggle}>
          {darkMode ? <FaSun className="text-yellow-300 w-6 h-6" /> : <FaMoon className="text-gray-300 w-6 h-6" />}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
