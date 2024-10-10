import React from 'react';
import { FaSearch, FaCheckCircle, FaChevronLeft, FaPen, FaFilter } from 'react-icons/fa';

const notifications = [
  {
    id: 1,
    sender: 'Ruhumuriza',
    project: 'PI (Food monitoring)',
    time: '1 min ago',
    type: 'personally',
  },
  {
    id: 2,
    sender: 'Ruhumuriza',
    project: 'PI (Food monitoring)',
    time: '1 min ago',
    type: 'personally',
  },
  {
    id: 3,
    sender: 'Ruhumuriza',
    project: 'PI (Food monitoring)',
    time: '1 min ago',
    type: 'personally',
  },
];

const HODNotification = () => {
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <FaChevronLeft style={styles.icon} />
        <h2>Notifications</h2>
        <div style={styles.searchContainer}>
          <FaSearch />
          <input type="text" placeholder="Search" style={styles.searchInput} />
        </div>
        <FaCheckCircle style={styles.icon} />
        <span style={styles.markRead}>Mark as read</span>
      </div>

      {/* Notifications and Compose Container */}
      <div style={styles.mainContent}>
        {/* Notifications Section */}
        <div style={styles.notificationsSection}>
          {/* Sidebar for Notification Filters */}
          <div style={styles.notificationFilters}>
            <button style={styles.filterButtonActive}>View all</button>
            <button style={styles.filterButton}>Inbox</button>
            <button style={styles.filterButton}>Team</button>
            <button style={styles.filterButton}>Archived</button>
          </div>

          {/* Notification Cards */}
          <div style={styles.notificationsList}>
            {notifications.map((notification) => (
              <div key={notification.id} style={styles.notificationCard}>
                <div style={styles.cardHeader}>
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Profile"
                    style={styles.profileImage}
                  />
                  <div style={styles.cardInfo}>
                    <p>
                      <strong>{notification.sender}</strong> added work to{' '}
                      <strong>{notification.project}</strong> ({notification.type})
                    </p>
                    <span>{notification.time}</span>
                  </div>
                  <div style={styles.cardActions}>
                    <button style={styles.viewButton}>View the project</button>
                    <button style={styles.acceptButton}>Accept</button>
                    <button style={styles.declineButton}>Decline</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compose Message Section */}
        <div style={styles.composeSection}>
          <div style={styles.composeHeader}>
            <h3>Compose</h3>
            <FaPen style={styles.composeIcon} />
            <FaFilter style={styles.composeIcon} />
          </div>
          <form style={styles.composeForm}>
            <label>New Message</label>
            <input type="text" placeholder="To" style={styles.input} />
            <textarea placeholder="Type your message" style={styles.textarea}></textarea>
            <button style={styles.sendButton}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  icon: {
    fontSize: '18px',
    marginRight: '10px',
    cursor: 'pointer',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: '5px 10px',
    borderRadius: '10px',
    flex: 1,
    marginRight: '10px',
    marginLeft: '10px',
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    marginLeft: '5px',
    width: '100%',
  },
  markRead: {
    fontSize: '16px',
    cursor: 'pointer',
  },
  mainContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  notificationsSection: {
    width: '65%',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  notificationFilters: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  filterButton: {
    padding: '10px',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  filterButtonActive: {
    padding: '10px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  notificationsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  notificationCard: {
    padding: '15px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  profileImage: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '15px',
  },
  cardInfo: {
    flex: 1,
  },
  cardActions: {
    display: 'flex',
    gap: '10px',
  },
  viewButton: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  acceptButton: {
    backgroundColor: '#34A853',
    color: '#fff',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  declineButton: {
    backgroundColor: '#EA4335',
    color: '#fff',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  composeSection: {
    width: '30%',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  composeHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  composeIcon: {
    fontSize: '16px',
    cursor: 'pointer',
  },
  composeForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    outline: 'none',
  },
  textarea: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    outline: 'none',
    height: '100px',
  },
  sendButton: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    alignSelf: 'flex-end',
  },
};

export default HODNotification;
