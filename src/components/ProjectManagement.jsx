import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the default calendar styles

const ProjectManagement = () => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([{ id: 1, taskName: '' }]);

  const handleTaskChange = (index, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].taskName = value;
    setTasks(updatedTasks);
  };

  const addTask = () => {
    setTasks([...tasks, { id: tasks.length + 1, taskName: '' }]);
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <button style={styles.backButton}>Back to the Dashboard</button>
      </div>

      {/* Form Section */}
      <div style={styles.formSection}>
        <div style={styles.formLeft}>
          <h3 style={styles.sectionTitle}>Add new project</h3>
          <input
            type="text"
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            style={styles.input}
          />
          <h3 style={styles.sectionTitle}>Description</h3>
          <textarea
            placeholder="Project Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={styles.textarea}
          ></textarea>
          <div style={styles.uploadSection}>
            <label>Project Description or</label>
            <button style={styles.uploadButton}>Upload as file PDF/TXT</button>
          </div>
        </div>

        {/* Category and Calendar */}
        <div style={styles.formRight}>
          <div style={styles.categoryContainer}>
            <h4 style={styles.sectionTitle}>Project Category</h4>
            <div style={styles.categoryBox}>Select Project Category</div>
            <h4 style={styles.sectionTitle}>Client</h4>
            <div style={styles.categoryBox}>Select Project Team</div>
          </div>
          <div style={styles.calendarContainer}>
            <Calendar />
            <button style={styles.addScheduleButton}>Add schedule</button>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div style={styles.timelineContainer}>
        <h4 style={styles.sectionTitle}>Timeline</h4>
        <div style={styles.timelinePagination}>
          <button style={styles.paginationButton}>5/5/2024</button>
          <button style={styles.paginationButton}>9/15/2024</button>
          <button style={styles.paginationButtonActive}>Latest projects added</button>
          <button style={styles.paginationButton}>+</button>
        </div>
      </div>

      {/* Task Assignment Section */}
      <div style={styles.taskAssignmentContainer}>
        <h4 style={styles.sectionTitle}>Actions</h4>
        <div style={styles.taskList}>
          {tasks.map((task, index) => (
            <div key={task.id} style={styles.taskRow}>
              <input
                type="text"
                placeholder="Task"
                value={task.taskName}
                onChange={(e) => handleTaskChange(index, e.target.value)}
                style={styles.input}
              />
              <select style={styles.select}>
                <option value="">Assign task to</option>
                <option value="team1">Team 1</option>
                <option value="team2">Team 2</option>
              </select>
              <button style={styles.addButton}>Add</button>
            </div>
          ))}
          <button onClick={addTask} style={styles.newTaskButton}>New Task</button>
        </div>
      </div>

      {/* Footer Section */}
      <div style={styles.footer}>
        <button style={styles.saveButton}>Send and Save</button>
      </div>
    </div>
  );
};

// Updated Styles for a modern look
const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
  },
  header: {
    marginBottom: '20px',
  },
  backButton: {
    padding: '10px 15px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  formSection: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  formLeft: {
    width: '50%',
    paddingRight: '20px',
  },
  formRight: {
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  textarea: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    minHeight: '100px',
    fontSize: '14px',
    marginBottom: '15px',
  },
  uploadSection: {
    marginTop: '10px',
  },
  uploadButton: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  categoryContainer: {
    marginBottom: '20px',
  },
  categoryBox: {
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  calendarContainer: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  addScheduleButton: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  timelineContainer: {
    marginBottom: '20px',
  },
  timelinePagination: {
    display: 'flex',
    gap: '10px',
  },
  paginationButton: {
    padding: '5px 10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
  paginationButtonActive: {
    padding: '5px 10px',
    border: '1px solid #007BFF',
    borderRadius: '5px',
    backgroundColor: '#007BFF',
    color: '#fff',
  },
  taskAssignmentContainer: {
    marginBottom: '20px',
  },
  taskList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  taskRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  select: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '14px',
  },
  addButton: {
    padding: '10px 15px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  newTaskButton: {
    padding: '10px 15px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  footer: {
    textAlign: 'center',
  },
  saveButton: {
    padding: '15px 30px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default ProjectManagement;
