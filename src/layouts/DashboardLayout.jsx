import React, { useEffect, useState } from "react";
import Barchart from '../components/Barchart';
import Sidebar from "../components/sidebar";
import { Outlet, redirect, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { selectLogin } from "../features/Auth/AuthSlice";

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

    const isLoggedIn = useSelector(selectLogin);
    useEffect(() => {

      if (!isLoggedIn) {
        // If the user is already logged in, redirect to the dashboard
        navigate("/login");
      }
    }, [isLoggedIn, navigate]);

  return (

    <div className="min-h-screen flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`flex-grow transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        <Navbar />
        <div className="p-6">
        <Outlet /> 
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
