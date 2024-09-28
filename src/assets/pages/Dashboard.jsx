import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/sidebar";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const chartData = {
    labels: ["Sales", "Expenses", "Investments"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
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
          <header className="mb-6">
            <h2 className="text-3xl font-semibold text-[#264667]">
              Welcome Back, <span className="text-[#4b749d]">Yvan</span>
            </h2>
            <p className="text-gray-600">
              Let’s make our department a great place for everyone. Check your
              new notifications below.
            </p>
          </header>

          <section>
            <h2 className="text-xl font-semibold mb-4">New Updates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">
                  Project Dashboard
                </h3>
                <p>New Assign</p>
                <div className="flex space-x-4 mt-4">
                  <a href="/progress-page-1">
                    <img
                      src="./src/assets/images/img3.png"
                      alt="Person"
                      className="w-10 h-10 rounded-full hover:scale-105 transition-transform"
                    />
                  </a>
                  <a href="/progress-page-2">
                    <img
                      src="./src/assets/images/img4.png"
                      alt="Person"
                      className="w-10 h-10 rounded-full hover:scale-105 transition-transform"
                    />
                  </a>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">
                  Project In progress
                </h3>
                <p>Active People</p>
                <div className="flex space-x-4 mt-4">
                  <a href="/progress-page-1">
                    <img
                      src="./src/assets/images/img4.png"
                      alt="Person"
                      className="w-10 h-10 rounded-full hover:scale-105 transition-transform"
                    />
                  </a>
                  <a href="/progress-page-2">
                    <img
                      src="./src/assets/images/img5.png"
                      alt="Person"
                      className="w-10 h-10 rounded-full hover:scale-105 transition-transform"
                    />
                  </a>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Project Overdue</h3>
                <p>Active people</p>
                <div className="flex space-x-4 mt-4">
                  <a href="/progress-page-1">
                    <img
                      src="./src/assets/images/img3.png"
                      alt="Person"
                      className="w-10 h-10 rounded-full hover:scale-105 transition-transform"
                    />
                  </a>
                  <a href="/progress-page-2">
                    <img
                      src="./src/assets/images/img2.png"
                      alt="Person"
                      className="w-10 h-10 rounded-full hover:scale-105 transition-transform"
                    />
                  </a>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Project Done</h3>
                <p>People in charge</p>
                <div className="flex space-x-4 mt-4">
                  <a href="/progress-page-1">
                    <img
                      src="./src/assets/images/img1.png"
                      alt="Person"
                      className="w-10 h-10 rounded-full hover:scale-105 transition-transform"
                    />
                  </a>
                  <a href="/progress-page-2">
                    <img
                      src="./src/assets/images/img5.png"
                      alt="Person"
                      className="w-10 h-10 rounded-full hover:scale-105 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Statistics</h2>
            <Pie
              data={chartData}
              options={{
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                  legend: {
                    position: "bottom",
                  },
                },
              }}
              style={{ width: "200px", height: "200px" }} // Use style instead of width/height props
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
