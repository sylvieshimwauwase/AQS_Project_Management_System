import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import VerifyCode from './pages/VerifyCode';
import ResetPassword from './pages/ResetPassword';
import AddMember from './pages/Addmember';
import Createemail from './pages/Createemailemployee';
import PasswordSetup from './pages/PasswordSetup';
// import ProjectStats from './pages/ProjectStats';
// import Sidebare from './Components/Sidebare';
// import EmployeeDashMain from './Components/EmployeeDashMain';
// import EmployeeDashboard from './pages/EmployeeDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard copy';
import ProjectStats from './pages/ProjectStats';
// import EmployeeTable from './pages/EmployeeTablecomponent';
import EmployeeTablecomponent from './pages/EmployeeTablecomponent';
function App() {
  return (
    <BrowserRouter> 
    <Routes>
       <Route path='/ProjectStats' element={<ProjectStats/>} /> 
       <Route path='/EmployeeDashboard' element={<EmployeeDashboard/>} />
       <Route path='/Navbar' element={<Navbar/>} />
       <Route path='/Signup' element={<Signup/>} />
       <Route path='/Login' element={<Login/>} />
       <Route path='/Dashboard' element={<Dashboard/>} />
       <Route path='/VerifyCode' element={<VerifyCode/>} />
       <Route path='/ResetPassword' element={<ResetPassword/>} />
       <Route path='/AddMember' element={<AddMember/>} />
       <Route path='/Createemail' element={<Createemail/>} />
       <Route path='/PasswordSetup' element={<PasswordSetup/>} />
       {/* <Route path='/ProjectStats' element={<ProjectStats/>} /> */}

       {/* <Route path='/EmployeeTable' */}
       <Route path='/EmployeeTablecomponent' element={<EmployeeTablecomponent/>} />








    </Routes>
 </BrowserRouter>
  );
}

export default App;
