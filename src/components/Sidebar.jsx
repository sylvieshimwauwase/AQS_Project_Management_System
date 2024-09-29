import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendar, FaHome, FaPoll, FaRegEnvelope, FaRegFileAlt, FaUsers, FaBars } from 'react-icons/fa';

function Sidebar({ isOpen, toggleSidebar }) {
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
  );
}

export default Sidebar;
