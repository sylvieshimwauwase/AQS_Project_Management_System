import React from 'react';
import { useSelector } from 'react-redux';
import { selectLogin } from '../features/Auth/AuthSlice';
import Barchart from '../components/Barchart'; 
import CalendarComponent from '../components/Calender';
import LineChart from '../components/Linechart';
import Piechart from '../components/Piechart';
import Horizontal from '../components/Horizontal';  // Import the Horizontal progress bar
import Footer from '../components/Footer';

function Dashboard() {
  const user = useSelector(selectLogin);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow p-6 bg-gray-100">
        {/* Header */}
        <header className="mb-6">
          <h2 className="text-3xl font-semibold text-[#264667] pb-7">
            Welcome Back, <span className="text-[#4b749d]">{user.hod_name}</span>
          </h2>
          <p className="text-gray-600">
            Let’s make our department a great place for everyone. Check your new notifications below.
          </p>
        </header>

        {/* Bar Chart & Calendar */}
        <section className="mt-10">
          <div className="flex gap-6">
            {/* Bar Chart */}
            <div className="w-2/3 bg-white p-6 rounded-lg shadow-md">
              <Barchart />
            </div>

            {/* Calendar */}
            <div className="w-1/3 p-6 bg-white rounded-lg shadow-md flex items-center justify-center">
              <CalendarComponent />
            </div>
          </div>
        </section>

        {/* Line Chart */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Employees Chart Overview</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <LineChart />
          </div>
        </section>

        {/* Pie Chart & Horizontal Progress Bar */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Project Progress & Status</h2>
          <div className="flex gap-6">
            {/* Pie Chart */}
            <div className="w-1/2 bg-white p-8 rounded-lg shadow-md flex items-center justify-center">
              <Piechart />
            </div>

            {/* Horizontal Progress Bar */}
            <div className="w-1/2 bg-white p-8 rounded-lg shadow-md flex items-center justify-center">
              <Horizontal />
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Dashboard;
