import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

// Sample data for tasks
const tasksData = [
  { id: 1, task: "Gather requirements", completed: false },
  { id: 2, task: "Database Design", completed: false },
  { id: 3, task: "Schema Creation", completed: false },
  { id: 4, task: "Insertion and Migration", completed: false },
  { id: 5, task: "Testing and Optimization", completed: false },
];

const EmployeeProjects = () => {
  const [tasks, setTasks] = useState(tasksData);

  // Handle checkbox changes
  const handleCheckboxChange = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.title}>Project details</h2>
        <FaTimes style={styles.closeIcon} />
      </div>

      {/* Project Card */}
      <div style={styles.projectCard}>
        <h3>Create Database</h3>
        <p>Rwanda Forensic</p>
        <div style={styles.progressSection}>
          <p>Progress</p>
          <div style={styles.progressBarContainer}>
            <div style={styles.progressBar}></div>
          </div>
          <span>40%</span>
        </div>
        <div style={styles.dueDate}>
          <p><span>5 Sept 2024</span></p>
        </div>
        <div style={styles.description}>
          <h4>Project Description</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
      </div>

      {/* Checklist */}
      <div style={styles.checklist}>
        <h4>Main Tasks Checklist</h4>
        <p>5 tasks</p>
        {tasks.map((task) => (
          <div key={task.id} style={styles.taskItem}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCheckboxChange(task.id)}
              style={styles.checkbox}
            />
            <label style={styles.taskLabel}>{task.task}</label>
          </div>
        ))}
      </div>

      {/* Save Button */}
      <button style={styles.saveButton}>Save</button>
    </div>
  );
};

// Styles
const styles = {
  container: {
    padding: '30px',
    maxWidth: '900px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    borderBottom: '1px solid #e0e0e0',
    paddingBottom: '10px',
  },
  title: {
    fontSize: '30px',
    fontWeight: 'bold',
  },
  closeIcon: {
    fontSize: '24px',
    color: 'red',
    cursor: 'pointer',
  },
  projectCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  progressSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '10px',
  },
  progressBarContainer: {
    flex: 1,
    height: '10px',
    backgroundColor: '#e0e0e0',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  progressBar: {
    width: '40%',
    height: '100%',
    backgroundColor: '#4caf50',
  },
  dueDate: {
    marginTop: '10px',
    fontSize: '14px',
    color: '#666',
  },
  description: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#666',
  },
  checklist: {
    marginBottom: '20px',
  },
  taskItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '10px',
    backgroundColor: '#f5f5f5',
  },
  checkbox: {
    marginRight: '10px',
    width: '20px',
    height: '20px',
  },
  taskLabel: {
    fontSize: '16px',
    color: '#333',
  },
  saveButton: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

export default EmployeeProjects;
