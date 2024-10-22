import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCalendar, FaHome, FaPoll, FaRegEnvelope, FaRegFileAlt, FaUsers, FaBars, FaSignOutAlt, FaMoon, FaSun } from "react-icons/fa";
import logo from "../assets/images/download.png";

function Sidebar({ isOpen, toggleSidebar }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const menuItems = [
    { path: "/dashboard", icon: FaHome, label: "Dashboard" },
    { path: "/dashboard/employee", icon: FaUsers, label: "Employee" },
    { path: "/dashboard/projects", icon: FaPoll, label: "Projects" },
    { path: "/dashboard/messages", icon: FaRegEnvelope, label: "Messages" },
    { path: "/dashboard/schedule", icon: FaCalendar, label: "Schedule" },
    { path: "/dashboard/reports", icon: FaRegFileAlt, label: "Reports" },
  ];

  return (
    <div className={`bg-[#264667] dark:bg-gray-800 transition-all duration-300 ${isOpen ? "w-64" : "w-16"} h-full fixed left-0 top-0 z-50`}>
      <div className="flex flex-col h-full">
        
        <div className="flex items-center justify-between p-4">
          <img src={logo} alt="AQS Logo" className={`w-10 h-10 ${isOpen ? "mr-2" : "mx-auto"}`} />
          {isOpen && <h1 className="text-xl text-white font-semibold">HOD DASHBOARD</h1>}
        </div>

        
        <nav className="flex-1 overflow-y-auto py-4 remove-scrollbar">
          <ul className="space-y-2">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 text-white hover:bg-gray-800 transition-colors duration-200 ${
                    location.pathname === item.path ? "bg-blue-500" : ""
                  }`}
                >
                  <item.icon className="w-6 h-6" />
                  {isOpen && <span className="ml-4">{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        
        <div className="p-4">
          
          <button
            onClick={toggleDarkMode}
            className={`flex items-center w-full px-4 py-2 mb-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-200 ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            {isDarkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            {isOpen && <span className="ml-2">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>}
          </button>

        
          <button
            className={`flex items-center w-full px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition duration-200 ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            <FaSignOutAlt className="w-5 h-5" />
            {isOpen && <span className="ml-2">Sign Out</span>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
