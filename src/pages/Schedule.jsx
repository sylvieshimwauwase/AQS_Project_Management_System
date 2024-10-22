import React, { useState } from 'react';

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [projectDescription, setProjectDescription] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-8">
      
      <div className="text-gray-600 mb-6 flex items-center">
        <button className="text-sm font-medium">&larr; Back to the Dashboard</button>
      </div>

      <main className="grid grid-cols-3 gap-6">
        
        <div className="col-span-1 bg-white p-6 rounded-md shadow-md space-y-4">
          <h2 className="text-xl font-semibold mb-2">Add new project</h2>
          
          
          <input
            type="text"
            placeholder="Project Name"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          
          <div className="space-y-2 relative">
            <div className="flex items-center space-x-2">
              <label className="block text-sm text-gray-600">Description</label>
              <span className="text-sm text-gray-500">or</span>
              <button className="text-blue-500 underline text-sm">
                Upload a file PDF/TXT
              </button>
            </div>

            
            <div className="relative">
              <textarea
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                placeholder="Project Description"
                className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 relative"
                rows={4}
              ></textarea>

              
              <div className="absolute top-2 right-2 flex space-x-1 items-center">
                
                <button className="px-1 py-0.5 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none text-xs">
                  B
                </button>
                <button className="px-1 py-0.5 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none text-xs">
                  I
                </button>
                <button className="px-1 py-0.5 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none text-xs">
                  U
                </button>

                
                <div className="flex flex-col justify-between space-y-0.5 cursor-pointer">
                  <span className="block w-3 h-0.5 bg-gray-600"></span>
                  <span className="block w-2 h-0.5 bg-gray-600"></span>
                  <span className="block w-1.5 h-0.5 bg-gray-600"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="col-span-1 bg-white p-6 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-4">Category</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Project Category</label>
              <input
                type="text"
                placeholder="Select Category"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Client</label>
              <input
                type="text"
                placeholder="Select Project Type"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        
        <div className="col-span-1 bg-white p-6 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-4">Timeline</h2>

          
          <div className="grid grid-cols-7 gap-2 mb-4">
            {Array.from({ length: 30 }).map((_, index) => (
              <button
                key={index}
                className={`p-2 text-center rounded-md ${
                  index === selectedDate.getDate() - 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200'
                }`}
                onClick={() => handleDateChange(new Date(2024, 9, index + 1))}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Add to schedule
          </button>
        </div>
      </main>
    </div>
  );
};

export default Schedule;
