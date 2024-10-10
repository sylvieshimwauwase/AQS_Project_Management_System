import React from "react";
import { FaPlusCircle, FaPaperPlane } from "react-icons/fa";

// Sample notifications data
const notifications = [
  { id: 1, user: "User1", avatar: "https://via.placeholder.com/80", message: "Lorem ipsum", isSender: false },
  { id: 2, user: "User2", avatar: "https://via.placeholder.com/80", message: "Hello there", isSender: true },
  { id: 3, user: "User3", avatar: "https://via.placeholder.com/80", message: "How are you?", isSender: false },
  { id: 4, user: "User2", avatar: "https://via.placeholder.com/80", message: "I'm fine!", isSender: true },
];

const EmployeeNotifications = () => {
  return (
    <div style={styles.container}>
      <h3>Notifications</h3>

      <div style={styles.notificationsList}>
        {notifications.map((notification) => (
          <div
            key={notification.id}
            style={{
              ...styles.messageContainer,
              justifyContent: notification.isSender ? "flex-end" : "flex-start",
            }}
          >
            {!notification.isSender && (
              <img src={notification.avatar} alt="avatar" style={styles.avatar} />
            )}
            <div
              style={{
                ...styles.messageBubble,
                backgroundColor: notification.isSender ? "#2A3E5B" : "#f0f0f0",
              }}
            >
              {notification.message}
            </div>
          </div>
        ))}
      </div>

      <div style={styles.inputContainer}>
        <FaPlusCircle style={styles.addIcon} />
        <input type="text" placeholder="Type Your message here......." style={styles.input} />
        <FaPaperPlane style={styles.sendIcon} />
      </div>
    </div>
  );
};

// Styles (with everything doubled in size)
const styles = {
  container: {
    padding: '40px', // Doubled padding
    maxWidth: '800px', // Doubled max-width
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  notificationsList: {
    marginBottom: '40px', // Doubled margin-bottom
    display: 'flex',
    flexDirection: 'column',
    gap: '20px', // Doubled gap between messages
  },
  messageContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px', // Doubled gap between avatar and message
  },
  avatar: {
    width: '80px', // Doubled avatar size
    height: '80px', // Doubled avatar size
    borderRadius: '50%',
  },
  messageBubble: {
    padding: '20px 30px', // Doubled padding inside the message bubble
    borderRadius: '30px', // Doubled border-radius for a bigger bubble
    maxWidth: '60%',
    color: '#fff',
    fontSize: '28px', // Doubled font-size
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px', // Doubled padding inside input container
    borderRadius: '20px', // Doubled border-radius for a rounded input box
    border: '1px solid #e0e0e0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Slightly stronger shadow for bigger size
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    padding: '20px', // Doubled padding inside the input field
    fontSize: '28px', // Doubled font-size for input
    fontFamily: 'Arial, sans-serif',
  },
  addIcon: {
    fontSize: '48px', // Doubled icon size
    color: '#2A3E5B',
    marginRight: '20px', // Doubled margin-right
    cursor: 'pointer',
  },
  sendIcon: {
    fontSize: '48px', // Doubled icon size
    color: '#2A3E5B',
    cursor: 'pointer',
  },
};

export default EmployeeNotifications;
