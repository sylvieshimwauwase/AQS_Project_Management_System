import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashPage from './assets/components/SplashPage';
import Login from './assets/pages/Login';
import Signup from './assets/pages/Signup';
import ResetPassword from './assets/pages/ResetPassword';
import VerifyCode from './assets/pages/VerifyCode';
import CreateNewPassword from './assets/pages/PasswordSetup';
import Createemailemployee from './assets/pages/createemailemployee';
import Addmember from './assets/pages/Addmember';
import Navbar from './assets/components/Navbar';
import Dashboard from './assets/pages/Dashboard';
import Sidebar from './assets/components/sidebar';
 
function App() {

   const [sidebarToggle, setSidebarToggle] = useState(false) 
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<SplashPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/resetPassword' element={<ResetPassword />} />
            <Route path='/verifyCode' element={<VerifyCode />} />
            <Route path='/createNewPassword' element={<CreateNewPassword />} />
            <Route path='/createemailemployee' element={<Createemailemployee/>} />
            <Route path='/addmember' element={<Addmember/>} />
            <Route path='/navbar' element={<Navbar/>} />
            <Route path='/sidebar' element={<Sidebar/>} />
            <Route path='/dashboard' element={<Dashboard/>} />

         </Routes>
      </BrowserRouter>
   );
}

export default App;
