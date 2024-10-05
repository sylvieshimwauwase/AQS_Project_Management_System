import React, { useState } from 'react';

const Addmember = ({ employees, assignTeam }) => {
  const [selectedTeam, setSelectedTeam] = useState('');

  const handleTeamChange = (e, id) => {
    setSelectedTeam(e.target.value);
    assignTeam(id, e.target.value); // Assign team based on employee id
  };

  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Assign Team</h2>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id} className="flex justify-between items-center mb-2">
            <span>{emp.fullname}</span>
            <select
              value={emp.team || selectedTeam}
              onChange={(e) => handleTeamChange(e, emp.id)}
              className="border p-1 rounded"
            >
              <option value="">Select a team</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
              {/* Add more teams */}
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Addmember;
