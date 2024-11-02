import React from 'react';
import { useSelector } from 'react-redux';

const EmployeeDashboard = () => {
  const projectData = useSelector((state) => state.projects); // Assuming Redux state shape

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        {/* Greeting Section */}
        <div className="bg-white p-4 rounded-lg shadow-md md:w-1/2 mb-4 md:mb-0">
          <p className="text-gray-500 text-sm">9:00 am</p>
          <h1 className="text-2xl font-bold text-orange-500">Good Morning</h1>
          <p className="text-gray-700 mt-2">
            Welcome back to the board! Here comes your daily tasks and ongoing projects to be done.
          </p>
        </div>

        {/* Notifications Section */}
        <div className="bg-white p-4 rounded-lg shadow-md md:w-1/2">
          <h1 className="text-2xl font-bold text-orange-500">Notifications</h1>
          <p className="text-gray-700 mt-2">
            Well done, but there are some projects which need to be done very soon. Try your best to meet the deadline.
          </p>
        </div>
      </div>

      {/* Project Status Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-800 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">To do</h2>
          <p className="text-lg">{projectData.toDo} Projects</p>
        </div>
        <div className="bg-blue-600 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">In Progress</h2>
          <p className="text-lg">{projectData.inProgress} Projects</p>
        </div>
        <div className="bg-green-600 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Done</h2>
          <p className="text-lg">{projectData.done} Projects</p>
        </div>
        <div className="bg-red-600 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Overdue</h2>
          <p className="text-lg">{projectData.overdue} Projects</p>
        </div>
      </div>

      {/* Progress Report Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">5 Projects</h2>
        <div className="flex justify-center items-center mt-4">
          {/* Replace this with a proper chart library for dynamic data */}
          <div className="relative w-40 h-40 bg-gray-200 rounded-full">
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <p className="text-2xl font-bold">40%</p>
              <p className="text-sm">2 Projects</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-600 mr-2"></div>
            <p>In Progress</p>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-600 mr-2"></div>
            <p>Done</p>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-600 mr-2"></div>
            <p>Overdue</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
