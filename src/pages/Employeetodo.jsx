import React from 'react';

const projectData = {
  todo: [
    { title: 'Design New UI', client: 'Minister of Health', progress: 0, date: '5 Sept 2024' },
    { title: 'Design New UI', client: 'Minister of Health', progress: 40, date: '5 Sept 2024' },
    { title: 'Design New UI', client: 'Minister of Health', progress: 50, date: '5 Sept 2024' },
  ],
  inProgress: [
    { title: 'Create Database', client: 'Rwanda Forensic', progress: 40, date: '5 Sept 2024' },
    { title: 'User Authentication', client: 'Rwanda Forensic', progress: 60, date: '5 Sept 2024' },
    { title: 'Update dashboard', client: 'Minister of Health', progress: 50, date: '5 Sept 2024' },
  ],
  done: [
    { title: 'Social Media Post', client: 'Africa QS', progress: 100, date: '5 Sept 2024' },
    { title: 'UI Update', client: 'Rwanda Forensic', progress: 100, date: '5 Sept 2024' },
  ],
  overdue: [
    { title: 'Social Media Post', client: 'Africa QS', progress: 20, date: '5 Sept 2024' },
    { title: 'UI Update', client: 'Rwanda Forensic', progress: 30, date: '5 Sept 2024' },
  ],
};

const ProjectCard = ({ title, client, progress, date }) => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-4">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm text-gray-500">{client}</p>
    <div className="flex items-center mt-2">
      <p className="text-xs font-medium">Progress</p>
      <div className="flex-1 ml-2 h-2 bg-gray-300 rounded-full overflow-hidden">
        <div className={`h-full ${progress === 100 ? 'bg-green-500' : 'bg-blue-500'}`} style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-xs ml-2">{progress}%</p>
    </div>
    <p className="text-xs text-gray-400 mt-2">{date}</p>
  </div>
);

const Employeetodo = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Projects Status</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* To Do Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">To do ({projectData.todo.length})</h3>
          {projectData.todo.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        {/* In Progress Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">In Progress ({projectData.inProgress.length})</h3>
          {projectData.inProgress.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        {/* Done Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Done ({projectData.done.length})</h3>
          {projectData.done.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        {/* Overdue Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Overdue ({projectData.overdue.length})</h3>
          {projectData.overdue.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Employeetodo;
