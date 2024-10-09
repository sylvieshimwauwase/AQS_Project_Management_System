import React from "react";
import { FaClipboardCheck, FaTasks, FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

// Mock data for progress report chart
const progressData = [
  { name: "In Progress", value: 2, color: "#8884d8" },
  { name: "Done", value: 2, color: "#82ca9d" },
  { name: "Overdue", value: 1, color: "#ff6666" },
];

const COLORS = ["#8884d8", "#82ca9d", "#ff6666"];

const EmployeeDash = () => {
  return (
    <div style={styles.container}>
      {/* Greeting and Notifications */}
      <div style={styles.greetingContainer}>
        <div style={styles.greetingBox}>
          <h2 style={styles.greetingTitle}>Good Morning</h2>
          <p style={styles.greetingText}>
            Welcome back! You have some new daily tasks and progress. Projects need to be done.
          </p>
        </div>
        <div style={styles.notificationsBox}>
          <h2 style={styles.notificationsTitle}>Notifications</h2>
          <p style={styles.notificationsText}>
            Well done, but there are some projects which need to be done very soon. Make sure to meet the deadline.
          </p>
        </div>
      </div>

      {/* Main Dashboard Section */}
      <div style={styles.mainDashboard}>
        {/* Project Cards */}
        <div style={styles.projectStatusContainer}>
          <ProjectCard title="To do" count={5} icon={<FaClipboardCheck />} bgColor="#2A3E5B" />
          <ProjectCard title="In Progress" count={2} icon={<FaTasks />} bgColor="#1A73E8" />
          <ProjectCard title="Done" count={2} icon={<FaCheckCircle />} bgColor="#34A853" />
          <ProjectCard title="Overdue" count={1} icon={<FaExclamationTriangle />} bgColor="#EA4335" />
        </div>

        {/* Progress Report */}
        <div style={styles.progressContainer}>
          <div style={styles.chartContainer}>
            <PieChart width={300} height={300}>
              <Pie
                data={progressData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {progressData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
            <div style={styles.chartLabel}>
              <h3>5 Projects</h3>
            </div>
          </div>
          <div style={styles.progressLegend}>
            <div style={styles.legendItem}>
              <div style={{ ...styles.legendColorBox, backgroundColor: "#8884d8" }}></div>
              <span style={styles.legendText}>In Progress</span>
            </div>
            <div style={styles.legendItem}>
              <div style={{ ...styles.legendColorBox, backgroundColor: "#82ca9d" }}></div>
              <span style={styles.legendText}>Done</span>
            </div>
            <div style={styles.legendItem}>
              <div style={{ ...styles.legendColorBox, backgroundColor: "#ff6666" }}></div>
              <span style={styles.legendText}>Overdue</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ title, count, icon, bgColor }) => {
  return (
    <div style={styles.cardContainer}>
      <div style={{ ...styles.cardHeader, backgroundColor: bgColor }}>
        <div style={styles.iconContainer}>{icon}</div>
        <h3 style={styles.cardTitle}>{title}</h3>
      </div>
      <div style={styles.cardBody}>
        <p style={styles.cardText}>{count} Projects</p>
      </div>
    </div>
  );
};

// Styles specific to ProjectCard layout



// Styles
const styles = {
  cardHeader: {
    padding: '10px 15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#fff',
  },
  cardBody: {
    padding: '10px 0',
    textAlign: 'center',
    backgroundColor: '#f1f1f1',  // lighter color for the card body
    borderTop: '1px solid #e5e5e5',  // slight border between header and body
  },
  iconContainer: {
    fontSize: '20px',
  },
  cardTitle: {
    fontSize: '14px',
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: '14px',
    color: '#555',
  },
  cardContainer: {
    backgroundColor: '#f9f9f9',  // light background for the body
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // similar shadow as in the image
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '300px',  // Adjust the width to be closer to the design
    height: '200px',
  },

  container: {
    padding: '50px',
    display: 'flex',
    flexDirection: 'column',
  },
  greetingContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  greetingBox: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    padding: '20px',
    borderRadius: '10px',
    marginRight: '10px',
  },
  greetingTitle: {
    fontSize: '24px',
    color: '#FF6A3D',
  },
  greetingText: {
    fontSize: '14px',
    color: '#555',
  },
  notificationsBox: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    padding: '20px',
    borderRadius: '10px',
  },
  notificationsTitle: {
    fontSize: '24px',
    color: '#FF6A3D',
  },
  notificationsText: {
    fontSize: '14px',
    color: '#555',
  },
  mainDashboard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  projectStatusContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    width: '50%',
  },
  projectCard: {
    color: '#fff',
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  iconContainer: {
    fontSize: '32px',
  },
  cardTitle: {
    fontSize: '18px',
  },
  cardText: {
    fontSize: '14px',
  },
  progressContainer: {
    backgroundColor: '#F0F0F0',
    padding: '20px',
    borderRadius: '10px',
    width: '45%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  chartContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  chartLabel: {
    position: 'absolute',
    textAlign: 'center',
  },
  progressLegend: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '10px',
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
  },
  legendColorBox: {
    width: '20px',
    height: '20px',
    marginRight: '10px',
    borderRadius: '5px',
  },
  legendText: {
    fontSize: '14px',
    color: '#333',
  },
};

export default EmployeeDash;
