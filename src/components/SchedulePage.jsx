import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'; // Import the default calendar styles

const SchedulePage = () => {
  const currentWeek = [
    { day: "Sunday", time: "12:00" },
    { day: "Monday", time: "12:00" },
    { day: "Tuesday", time: "12:00" },
    { day: "Wednesday", time: "12:00" },
    { day: "Thursday", time: "12:00" },
    { day: "Friday", time: "12:00" },
    { day: "Saturday", time: "12:00" },
  ];

  const todayTasks = [
    { task: "Web design", color: "green" },
    { task: "Participants check-up", color: "blue" },
    { task: "Follow up", color: "orange" },
  ];

  return (
    <div style={styles.container}>
      {/* Calendar Component */}
      <div style={styles.calendarContainer}>
        <Calendar />
        <button style={styles.addButton}>Add schedule</button>
      </div>

      {/* Today's Schedule */}
      <div style={styles.todayScheduleContainer}>
        <h3 style={styles.todayScheduleTitle}>Today’s schedule</h3>
        <ul style={styles.taskList}>
          {todayTasks.map((task, index) => (
            <li key={index} style={{ ...styles.taskItem, borderLeftColor: task.color }}>
              {task.task}
            </li>
          ))}
        </ul>
      </div>

      {/* Weekly Schedule */}
      <div style={styles.weeklyScheduleContainer}>
        <div style={styles.scheduleHeader}>
          <h4>Dec 21 - 28 Dec, 2024</h4>
          <div>
            <button style={styles.switchButton}>Month</button>
            <button style={styles.switchButtonActive}>Week</button>
            <button style={styles.switchButton}>Day</button>
          </div>
        </div>
        <div style={styles.weekContainer}>
          {currentWeek.map((day, index) => (
            <div key={index} style={styles.dayColumn}>
              <div style={styles.dayName}>{day.day}</div>
              <div style={styles.dayTime}>{day.time}</div>
            </div>
          ))}
        </div>

        {/* Example Task */}
        <div style={styles.taskBlock}>
          <span style={styles.taskText}>User Assign</span>
        </div>
      </div>
    </div>
  );
};

// Updated styles for the page
const styles = {
  container: {
    display: "flex",
    gap: "20px",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f5f5",
  },
  calendarContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    width: "250px", // Adjust calendar width
  },
  addButton: {
    marginTop: "15px",
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%", // Full width button
  },
  todayScheduleContainer: {
    width: "220px",
    backgroundColor: "#2A3E5B",
    color: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  todayScheduleTitle: {
    marginBottom: "10px",
    fontSize: "18px",
    fontWeight: "bold",
  },
  taskList: {
    listStyleType: "none",
    padding: "0",
    margin: "0",
  },
  taskItem: {
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: "#fff",
    color: "#333",
    borderRadius: "5px",
    borderLeft: "5px solid",
    fontWeight: "500",
  },
  weeklyScheduleContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    position: "relative",
  },
  scheduleHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  switchButton: {
    padding: "5px 10px",
    backgroundColor: "#f0f0f0",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "5px",
  },
  switchButtonActive: {
    padding: "5px 10px",
    backgroundColor: "#007BFF",
    border: "none",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "5px",
  },
  weekContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    backgroundColor: "#F0F0F0",
    borderRadius: "10px",
  },
  dayColumn: {
    textAlign: "center",
    flex: 1,
    padding: "5px 10px",
    borderRight: "1px solid #ddd",
    lastChild: {
      borderRight: "none",
    },
  },
  dayName: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  dayTime: {
    marginTop: "5px",
    color: "#555",
    fontSize: "12px",
  },
  taskBlock: {
    position: "absolute",
    top: "100px",
    left: "150px",
    width: "150px",
    height: "40px",
    backgroundColor: "#4caf50",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  taskText: {
    fontWeight: "bold",
  },
};

export default SchedulePage;
