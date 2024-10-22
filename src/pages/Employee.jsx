import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import EmployeeList from '../components/Memberlist';
import Addmember from './Addmember'; 
import { IoMdAdd, IoMdMail } from 'react-icons/io';

const Employee = () => {
  const [employees, setEmployees] = useState([
    
    // { id: 1, fullname: 'John Doe', team: '' },
    // { id: 2, fullname: 'Jane Smith', team: '' },
  ]);

  const navigate = useNavigate(); 

  
  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  
  const assignTeam = (id, team) => {
    setEmployees(employees.map(emp => (emp.id === id ? { ...emp, team } : emp)));
  };

  
  const handleCreateEmailClick = () => {
    navigate('/dashboard/createemailemployee');
  };

  
  const handleAddMemberClick = () => {
    navigate('/addmember');
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="flex space-x-4">
        
        <button
          className="bg-[#264667] text-white py-2 px-4 rounded-lg flex items-center space-x-2"
          onClick={handleCreateEmailClick} 
        >
          Create an email of the employee 
          <IoMdMail />
        </button>

        
        <button
          className="bg-[#264667] text-white py-2 px-4 rounded-lg flex items-center space-x-2"
          onClick={handleAddMemberClick} 
        >
          Add the employee to the team 
          <IoMdAdd />
        </button>
      </div>

      
      {/* <div className="mt-6">
        <Addmember employees={employees} assignTeam={assignTeam} />
      </div> */}

      <EmployeeList employees={employees} />
    </div>
  );
};

export default Employee;
