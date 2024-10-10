import React from "react";

// Sample data for each project status
const projectData = {
  todo: [
    { name: "Design New UI", client: "Minister of Health", progress: 40, dueDate: "5 Sept 2024" },
    { name: "Design New UI", client: "Minister of Health", progress: 40, dueDate: "5 Sept 2024" },
  ],
  inProgress: [
    { name: "Create Database", client: "Rwanda Forensic", progress: 40, dueDate: "5 Sept 2024" },
    { name: "User Authentication", client: "Rwanda Forensic", progress: 60, dueDate: "5 Sept 2024" },
    { name: "Update dashboard", client: "Minister of Health", progress: 50, dueDate: "5 Sept 2024" },
  ],
  done: [
    { name: "Social Media Post", client: "Africa GS", progress: 100, dueDate: "5 Sept 2024" },
    { name: "UI Update", client: "Rwanda Forensic", progress: 100, dueDate: "5 Sept 2024" },
  ],
  overdue: [
    { name: "Social Media Post", client: "Africa GS", progress: 20, dueDate: "5 Sept 2024" },
    { name: "UI Update", client: "Rwanda Forensic", progress: 30, dueDate: "5 Sept 2024" },
  ],
};

// Project Card Component
const ProjectCard = ({ name, client, progress, dueDate }) => {
  return (
    <div style={styles.projectCard}>
      <div style={styles.cardHeader}>
        <h4>{name}</h4>
        <p>{client}</p>
      </div>
      <div style={styles.progressSection}>
        <p>Progress</p>
        <div style={styles.progressBarContainer}>
          <div style={{ ...styles.progressBar, width: `${progress}%` }}></div>
        </div>
        <span>{progress}%</span>
      </div>
      <div style={styles.dueDateSection}>
        <span>{dueDate}</span>
      </div>
    </div>
  );
};

// Main Component to render the Project Status Page
const EmployeeToDo = () => {
  return (
    <div style={styles.container}>
      <h2>Projects Status</h2>

      <div style={styles.columnsContainer}>
        {/* To Do Column */}
        <div style={styles.column}>
          <h3>To do ({projectData.todo.length})</h3>
          {projectData.todo.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* In Progress Column */}
        <div style={styles.column}>
          <h3>In Progress ({projectData.inProgress.length})</h3>
          {projectData.inProgress.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Done Column */}
        <div style={styles.column}>
          <h3>Done ({projectData.done.length})</h3>
          {projectData.done.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Overdue Column */}
        <div style={styles.column}>
          <h3>Overdue ({projectData.overdue.length})</h3>
          {projectData.overdue.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  columnsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
  },
  column: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  projectCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  cardHeader: {
    marginBottom: '10px',
  },
  progressSection: {
    marginBottom: '10px',
  },
  progressBarContainer: {
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: '8px',
    overflow: 'hidden',
    height: '10px',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4caf50', // Green for progress
    borderRadius: '8px',
  },
  dueDateSection: {
    marginTop: '10px',
    fontSize: '12px',
    color: '#888',
  },
};

export default EmployeeToDo;
