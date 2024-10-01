import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar'

import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import VerifyCode from './pages/VerifyCode';
// import ResetPassword from './pages/ResetPassword';
// import AddMember from './pages/Addmember';
// import Createemail from './pages/Createemailemployee';
// import PasswordSetup from './pages/PasswordSetup';
// import Sidebare from './Components/Sidebare';
// import EmployeeDashMain from './Components/EmployeeDashMain';
import EmployeeDashboard from './pages/EmployeeDashboard.jsx';
import ProjectStats from './pages/ProjectStats';
function App() {
  return (
    <BrowserRouter> 
    <Routes>
       <Route path='/ProjectStats' element={<ProjectStats/>} /> 
       <Route path='/EmployeeDashboard' element={<EmployeeDashboard/>} />
       {/* <Route path='/Navbar' element={<Navbar/>} /> */}
       <Route path='/Signup' element={<Signup/>} />
       <Route path='/Login' element={<Login/>} />
       {/* <Route path='/Dashboard' element={<Dashboard/>} /> */}
       {/* <Route path='/VerifyCode' element={<VerifyCode/>} /> */}
       {/* <Route path='/ResetPassword' element={<ResetPassword/>} />
       <Route path='/AddMember' element={<AddMember/>} />
       <Route path='/Createemail' element={<Createemail/>} />
       <Route path='/PasswordSetup' element={<PasswordSetup/>} /> */}








    </Routes>
 </BrowserRouter>
  );
}

export default App;
