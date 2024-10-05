import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100 overflow-hidden">
      <div className="flex h-full">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div
          className={`flex-grow flex flex-col transition-all duration-300 ${
            isSidebarOpen ? "md:ml-64" : "ml-16"
          }`}
        >
          <Navbar toggleSidebar={toggleSidebar} />
          <main className="flex-grow p-4 overflow-hidden max-w-full">
            <div className="w-full h-full max-w-full overflow-x-scroll">
              <Outlet />
            </div>
          </main>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
