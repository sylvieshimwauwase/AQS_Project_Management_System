// function Composemessage() {
//   const [message, setMessage] = useState({
//     to: '',
//     body: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setMessage((prevMessage) => ({
//       ...prevMessage,
//       [name]: value,
//     }));
//   };

//   const handleSend = () => {
//     // Handle sending message (API call or logic)
//     alert(`Message sent to ${message.to}: ${message.body}`);
//     setMessage({ to: '', body: '' });
//   };

//   return (
//     <div className="p-4 bg-white rounded-lg shadow-md">
//       <h2 className="text-xl font-semibold mb-4">Compose</h2>
//       <input
//         type="text"
//         name="to"
//         value={message.to}
//         onChange={handleChange}
//         placeholder="To"
//         className="w-full mb-4 p-2 border rounded-lg"
//       />
//       <textarea
//         name="body"
//         value={message.body}
//         onChange={handleChange}
//         placeholder="New Message"
//         className="w-full mb-4 p-2 border rounded-lg"
//       />
//       <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
//         Send
//       </button>
//     </div>
//   );
// }

// export default Composemessage;

import React from "react";
import EmployeeSidebar from "../components/EmployeeSidebar";
import EmployeeHeader from "../components/EmployeeHeader";
import EmployeeDash from "../components/EmployeeDash";

const EmployeeMainDashboard = () => {
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
          <EmployeeDash />
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

export default EmployeeMainDashboard;

