import React from 'react'
import './EmployeeDash.css';
function EmployeeDashboard() {
  return (
    <div>
        <div class="dashboard">
  <div class="header">
    <div class="greeting">
      <p class="time">9:00 am</p>
      <h1>Good Morning</h1>
      <p>Welcome back to the board! Here comes your daily tasks and ongoing projects to be done.</p>
    </div>
    <div class="notifications">
      <h1>Notifications</h1>
      <p>Well done, but there are some projects which need to be done very soon. Try your best to meet the deadline.</p>
    </div>
  </div>

  <div class="project-status">
    <div class="status-item to-do">
      <h2>To do</h2>
      <p>5 Projects</p>
    </div>
    <div class="status-item in-progress">
      <h2>In Progress</h2>
      <p>2 Projects</p>
    </div>
    <div class="status-item done">
      <h2>Done</h2>
      <p>2 Projects</p>
    </div>
    <div class="status-item overdue">
      <h2>Overdue</h2>
      <p>1 Projects</p>
    </div>
  </div>

  <div class="progress-report">
    <div class="progress-circle">
      <div class="circle-inner">
        <h2>5 Projects</h2>
        <p class="progress-text">40%<br />2 Projects</p>
      </div>
    </div>
    <div class="progress-legend">
      <p><span class="legend-item to-do"></span> In Progress</p>
      <p><span class="legend-item done"></span> Done</p>
      <p><span class="legend-item overdue"></span> Overdue</p>
    </div>
  </div>
</div>

    </div>
  )
}

export default EmployeeDashboard