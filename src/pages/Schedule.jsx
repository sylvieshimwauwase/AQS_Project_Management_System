import React from 'react';
import ActionsSection from '../components/ActionSection';
import TimelineCalendar from '../components/TimelineCalender';
import Addprojectform from '../components/Addprojectform';

const Schedule = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      

      <main className="p-4 space-y-4">
        {/* Add New Project Form */}
        <Addprojectform />

        {/* Actions Section */}
        <ActionsSection />

        {/* Timeline & Calendar */}
        <TimelineCalendar />
      </main>
    </div>
  );
};

export default Schedule;
