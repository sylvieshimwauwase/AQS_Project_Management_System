import React from "react";
import EmployeeSidebar from "../components/EmployeeSidebar";
import EmployeeHeader from "../components/EmployeeHeader";
import EmployeeProjects from "../components/EmployeeProjects";
const EmployeeProjectsPage = () => {
  return (
    <div style={styles.mainContainer}>
      {/* Sidebar */}
      <div style={styles.sidebarContainer}>
        <EmployeeSidebar />
      </div>
      
      {/* Main Content Area */}
      <div style={styles.contentContainer}>
        {/* Header */}
        <EmployeeHeader />

        {/* Dashboard Content */}
        <div style={styles.dashboardContainer}>
          <EmployeeProjects />
        </div>
      </div>
    </div>
  );
};

// Styles for the layout
const styles = {
  mainContainer: {
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
  },
  sidebarContainer: {
    width: '220px',
    backgroundColor: '#2a3e5b',
  },
  contentContainer: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f4f4f4',
  },
  dashboardContainer: {
    flexGrow: 1,
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
};

export default EmployeeProjectsPage;

