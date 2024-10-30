import React from 'react'
import './EmployeeDash.css';
function EmployeeDash() {
  return (
    <div>
        <div className="dashboard">
  <div className="header">
    <div className="greeting">
      <p className="time">9:00 am</p>
      <h1>Good Morning</h1>
      <p>Welcome back to the board! Here comes your daily tasks and ongoing projects to be done.</p>
    </div>
    <div className="notifications">
      <h1>Notifications</h1>
      <p>Well done, but there are some projects which need to be done very soon. Try your best to meet the deadline.</p>
    </div>
  </div>

  <div className="project-status">
    <div className="status-item to-do">
      <h2>To do</h2>
      <p>5 Projects</p>
    </div>
    <div className="status-item in-progress">
      <h2>In Progress</h2>
      <p>2 Projects</p>
    </div>
    <div className="status-item done">
      <h2>Done</h2>
      <p>2 Projects</p>
    </div>
    <div className="status-item overdue">
      <h2>Overdue</h2>
      <p>1 Projects</p>
    </div>
  </div>

  <div className="progress-report">
    <div className="progress-circle">
      <div className="circle-inner">
        <h2>5 Projects</h2>
        <p className="progress-text">40%<br />2 Projects</p>
      </div>
    </div>
    <div className="progress-legend">
      <p><span className="legend-item to-do"></span> In Progress</p>
      <p><span className="legend-item done"></span> Done</p>
      <p><span className="legend-item overdue"></span> Overdue</p>
    </div>
  </div>
</div>

    </div>
  )
}

export default EmployeeDash