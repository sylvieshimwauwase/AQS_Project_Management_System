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
        <h2 className="text-3xl font-semibold text-[#264667]">
          Welcome Back, <span className="text-[#4b749d]">{user.hod_name}</span>
        </h2>
        <p className="text-gray-600">
          Let’s make our department a great place for everyone. Check your new notifications below.
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-4">New Updates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Project Dashboard</h3>
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

          {/* Card 2 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Project In progress</h3>
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

          {/* Card 3 */}
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

          {/* Card 4 */}
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

    
    
    <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Performance Overview & Calendar</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Barchart />
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <CalendarComponent />
          </div>
        </div>
      </section>

       {/* Line Chart below the Bar Chart and Calendar */}
       <section className="mt-10">
       <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Line Chart Overview</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <LineChart />
          </div>
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
