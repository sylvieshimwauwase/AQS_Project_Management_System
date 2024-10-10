import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const PerformanceReportPage = () => {
  const yearlyProgress = 40; // Example progress value
  const monthlyProgress = 1; // Example progress value

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <h2>Performance Report</h2>
        <select style={styles.dropdown}>
          <option value="yearly">Yearly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      {/* Circular Gauge */}
      <div style={styles.gaugeContainer}>
        <CircularProgressbar
          value={yearlyProgress}
          maxValue={100}
          text={`Summary`}
          styles={buildStyles({
            textSize: "12px",
            pathColor: "#4caf50",
            textColor: "#333",
            trailColor: "#ddd",
          })}
        />
        <h3>{yearlyProgress} Projects Done</h3>
      </div>

      {/* Projects Summary */}
      <div style={styles.projectSummary}>
        {/* Monthly */}
        <div style={styles.projectCard}>
          <h4>Monthly</h4>
          <h2>{monthlyProgress} Projects</h2>
          <div style={styles.progressBadge}>
            <span>19%</span>
          </div>
        </div>

        {/* Yearly */}
        <div style={styles.projectCard}>
          <h4>Yearly</h4>
          <h2>{yearlyProgress} Projects</h2>
          <div style={styles.progressBadge}>
            <span>19%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles (can also be moved to a CSS file)
const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  dropdown: {
    padding: "5px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  gaugeContainer: {
    textAlign: "center",
    marginBottom: "30px",
  },
  projectSummary: {
    display: "flex",
    justifyContent: "space-between",
  },
  projectCard: {
    width: "45%",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  progressBadge: {
    marginTop: "10px",
    backgroundColor: "#FF6A3D",
    padding: "5px 10px",
    borderRadius: "5px",
    color: "#fff",
    fontWeight: "bold",
  },
};

export default PerformanceReportPage;
