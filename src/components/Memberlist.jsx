import React from 'react';

const Memberlist = ({ employees }) => {
  const membersInTeam = employees.filter(emp => emp.team);
  const membersNoTeam = employees.filter(emp => !emp.team);

  return (
    <div className="p-4">
      <h2 className="text-center font-bold p-5 mr-10 mt-8">Members in a team</h2>
      <table className="table-auto w-full bg-white h-10 shadow-slate-300 text-center">
        <thead>
          <tr>
            <th>No</th>
            <th>ID</th>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Nationality</th>
            <th>Phone Number</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {membersInTeam.map((emp, idx) => (
            <tr key={emp.id}>
              <td>{idx + 1}</td>
              <td>{emp.id}</td>
              <td>{emp.fullname}</td>
              <td>{emp.gender}</td>
              <td>{emp.nationality}</td>
              <td>{emp.phonenumber}</td>
              <td>{emp.team}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-center font-bold p-5 mr-10 mt-8">Members not in a team</h2>
      <table className="table-auto w-full  bg-white h-10 shadow-slate-300 text-center">
        <thead>
          <tr>
            <th>No</th>
            <th>ID</th>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Nationality</th>
            <th>Phone Number</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {membersNoTeam.map((emp, idx) => (
            <tr key={emp.id}>
              <td>{idx + 1}</td>
              <td>{emp.id}</td>
              <td>{emp.fullname}</td>
              <td>{emp.gender}</td>
              <td>{emp.nationality}</td>
              <td>{emp.phonenumber}</td>
              <td>{emp.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Memberlist;
