import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Calendar</h2>
      <Calendar onChange={setDate} value={date} />
      <p className="mt-4">Selected Date: {date.toDateString()}</p>
    </div>
  );
};

export default CalendarComponent;
