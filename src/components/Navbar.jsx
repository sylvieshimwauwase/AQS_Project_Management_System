import React, { useState } from 'react';
import { FaBell, FaSearch, FaUserCircle, FaMoon } from 'react-icons/fa'; // Import the moon icon
import { useSelector } from 'react-redux';
import { selectLogin } from '../features/Auth/AuthSlice';

const Navbar = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };
  const user = useSelector(selectLogin);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-[#264667]">Africa Quantitative Science</h1>
      <div className="flex items-center space-x-6">
        {/* Search and Bell icons */}
        <div className='flex-items-center gap-x-5'>
          {/* <div className="relative md:w-65">
            <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2'>
              <button className="p-1 focus:outline-none text-white md:text-black">
                <FaSearch />
              </button>
              <input 
                type="text" 
                placeholder="Search" 
                className="w-full px-4 py-1 pr-4 rounded shadow focus:outline-none hidden md:block" 
              />
            </span> */}
          {/* </div> */}
        </div>

        {/* Bell icon */}
        <button className="relative">
          <FaBell className="w-6 h-6 text-[#264667]" />
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">3</span>
        </button>

        {/* Moon icon for dark mode
        <button className="focus:outline-none">
          <FaMoon className="w-6 h-6 text-[#264667]" />
        </button> */}

        {/* User profile and menu */}
        <div className="relative">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={toggleProfileMenu}
          >
            <FaUserCircle className="w-8 h-8 text-[#264667]" />
            <span className="text-sm font-semibold text-[#264667]">{user.hod_name}</span>
          </div>

          {/* Profile dropdown */}
          {isProfileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-20">
              <ul className="py-1 text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
