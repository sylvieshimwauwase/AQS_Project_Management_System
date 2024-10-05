import React, { useState } from 'react';
import EmployeeForm from '../components/Memberform'; 
import EmployeeList from '../components/Memberlist';
import Addmember from './Addmember';

const Employee = () => {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const assignTeam = (id, team) => {
    setEmployees(employees.map(emp => emp.id === id ? { ...emp, team } : emp));
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <EmployeeForm addEmployee={addEmployee} />
        <Addmember employees={employees} assignTeam={assignTeam} />
      </div>
      <EmployeeList employees={employees} />
    </div>
  );
};

export default Employee;
