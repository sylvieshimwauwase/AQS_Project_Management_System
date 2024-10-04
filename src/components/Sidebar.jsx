import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendar, FaHome, FaPoll, FaRegEnvelope, FaRegFileAlt, FaUsers, FaBars, FaSignOutAlt, FaMoon, FaSun } from 'react-icons/fa';
import logo from '../assets/images/download.png';

function Sidebar({ isOpen, toggleSidebar }) {
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('bg-gray-900', !isDarkMode); // Change background color based on dark mode
    document.body.classList.toggle('text-white', !isDarkMode); // Change text color based on dark mode
  };

  return (
    <div className={`bg-[#264667] transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'} h-full px-4 py-2 fixed`}>
      {/* Logo Section */}
      <div className="flex justify-center items-center my-4 mx-4">
        <div className=" p-2 rounded-md"> 
          <img src={logo} alt="AQS Logo" className="w-30 h-30 " />
        </div>
      </div>

      {/* Toggle and Title */}
      <div className='my-4 flex justify-between items-center'>
        <h1 className={`text-xl text-white font-semibold transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
          HOD DASHBOARD
        </h1>
        <FaBars className="text-white cursor-pointer" onClick={toggleSidebar} />
      </div>

      <hr className="mb-4" />

      {/* Scrollable Menu Section */}
      <div className={`flex-1 overflow-y-auto ${isOpen ? 'h-[calc(100vh-150px)]' : 'h-[calc(100vh-100px)]'}`}>
        <ul className={`space-y-4 text-white font-semibold ${!isOpen ? 'flex flex-col items-center' : ''}`}>
          <li>
            <Link to="/dashboard" className='flex items-center px-4 py-3 rounded-md hover:bg-blue-500 cursor-pointer'>
              <FaHome className='w-6 h-6' />
              {isOpen && <span className='ml-4'>Dashboard</span>}
            </Link>
          </li>
          <li>
            <Link to="/dashboard/employee" className='flex items-center px-4 py-3 rounded-md hover:bg-blue-500 cursor-pointer'>
              <FaUsers className='w-6 h-6' />
              {isOpen && <span className='ml-4'>Employee</span>}
            </Link>
          </li>
          <li>
            <Link to="/dashboard/projects" className='flex items-center px-4 py-3 rounded-md hover:bg-blue-500 cursor-pointer'>
              <FaPoll className='w-6 h-6' />
              {isOpen && <span className='ml-4'>Projects</span>}
            </Link>
          </li>
          <li>
            <Link to="/dashboard/messages" className='flex items-center px-4 py-3 rounded-md hover:bg-blue-500 cursor-pointer'>
              <FaRegEnvelope className='w-6 h-6' />
              {isOpen && <span className='ml-4'>Messages</span>}
            </Link>
          </li>
          <li>
            <Link to="/dashboard/schedule" className='flex items-center px-4 py-3 rounded-md hover:bg-blue-500 cursor-pointer'>
              <FaCalendar className='w-6 h-6' />
              {isOpen && <span className='ml-4'>Schedule</span>}
            </Link>
          </li>
          <li>
            <Link to="/dashboard/reports" className='flex items-center px-4 py-3 rounded-md hover:bg-blue-500 cursor-pointer'>
              <FaRegFileAlt className='w-6 h-6' />
              {isOpen && <span className='ml-4'>Reports</span>}
            </Link>
          </li>
        </ul>
      </div>

      {/* Dark Mode and Sign Out Buttons */}
      <div className="mt-4 flex flex-col items-center">
        <button
          onClick={toggleDarkMode}
          className='flex items-center px-4 py-2 mt-4 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-200'
        >
          {isDarkMode ? <FaSun className='w-5 h-5' /> : <FaMoon className='w-5 h-5' />}
          {isOpen && <span className='ml-2'>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>}
        </button>

        <button
          className='flex items-center px-4 py-2 mt-4 rounded-md bg-red-500 text-white hover:bg-red-600 transition duration-200'
        >
          <FaSignOutAlt className='w-5 h-5' />
          {isOpen && <span className='ml-2'>Sign Out</span>}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
