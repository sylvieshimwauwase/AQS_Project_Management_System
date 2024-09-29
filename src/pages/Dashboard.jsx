import React from 'react'
import { useSelector } from 'react-redux';
import { selectLogin } from '../features/Auth/AuthSlice';

function Dashboard() {

  const user = useSelector(selectLogin);
  
  return (
    <div>
      <header className="mb-6">
            <h2 className="text-3xl font-semibold text-[#264667]">
              Welcome Back, <span className="text-[#4b749d]">{user.hod_name}</span>
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
    </div>
  )
}

export default Dashboard