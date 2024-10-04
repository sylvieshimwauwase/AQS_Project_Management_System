import React from 'react';
import { useSelector } from 'react-redux';
import { selectLogin } from '../features/Auth/AuthSlice';
import Barchart from '../components/Barchart'; 
import CalendarComponent from '../components/Calender';
import LineChart from '../components/Linechart';
import PieChart from './Piechart';

function Dashboard() {
  const user = useSelector(selectLogin);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="mb-6">
        <h2 className="text-3xl font-semibold text-[#264667] pb-7">
          Welcome Back, <span className="text-[#4b749d]">{user.hod_name}</span>
        </h2>
        <p className="text-gray-600">
          Let’s make our department a great place for everyone. Check your new notifications below.
        </p>
      </header>

      <section className="mt-10">
        <div className="flex gap-6">
          <div className="w-2/3 bg-white p-6 rounded-lg shadow-md">
            <Barchart />
          </div>

          {/* Calendar with increased size and improved styles */}
          <div className="w-1/3 p-6 bg-white rounded-lg shadow-md flex items-center justify-center">
            <CalendarComponent />
          </div>
        </div>
      </section>

      {/* Line Chart */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Line Chart Overview</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <LineChart />
        </div>
      </section>

      {/* Pie Chart */}
      <section className="mt-10">
        <div className="bg-white p-6 rounded-lg shadow-md w-90 h-90">
          <PieChart />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
