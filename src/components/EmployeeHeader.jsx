import React from "react";
import { FaSearch, FaBell, FaMoon, FaCommentDots } from "react-icons/fa";

const EmployeeHeader = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        {/* Replace with the actual logo */}
        <img
          src="https://via.placeholder.com/50" // Placeholder for the logo
          alt="AQS Logo"
          style={styles.logo}
        />
      </div>
      <div style={styles.searchContainer}>
        <button style={styles.searchButton}>
          <FaSearch />
        </button>
      </div>
      <div style={styles.iconsContainer}>
        <FaBell style={styles.icon} />
        <FaMoon style={styles.icon} />
        <FaCommentDots style={styles.icon} />
      </div>
      <div style={styles.profileContainer}>
        <span>Employee's Email</span>
        <img
          src="https://via.placeholder.com/40" // Placeholder for the employee profile image
          alt="Profile"
          style={styles.profileImage}
        />
      </div>
    </header>
  );
};

// Inline Styles (you can convert these into a CSS file)
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "10px 20px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    height: "60px",
    position: "relative",
    zIndex: "1000",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "50px",
  },
  searchContainer: {
    flexGrow: "1",
    display: "flex",
    justifyContent: "center",
  },
  searchButton: {
    backgroundColor: "#2a3e5b",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
  },
  iconsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "120px",
  },
  icon: {
    fontSize: "18px",
    cursor: "pointer",
    margin: "0 10px",
    color: "#000",
  },
  profileContainer: {
    display: "flex",
    alignItems: "center",
  },
  profileImage: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginLeft: "10px",
  },
};

export default EmployeeHeader;
