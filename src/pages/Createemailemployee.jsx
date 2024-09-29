import React, { useState } from "react";
import addImage from "../assets/images/addhim.jfif";
import Btn from "../components/Btn";
import { FaEye } from "react-icons/fa";

function CreateEmailEmployee() {
  const [email, setEmail] = useState("");
  const [defaultPassword, setDefaultPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!fullName.trim()) {
      errors["fullName"] = "Full name cannot be empty";
    }

    if (!email) {
      errors["email"] = "Email cannot be empty";
    } else if (!emailRegex.test(email)) {
      errors["email"] = "Email is not valid";
    }

    if (!defaultPassword) {
      errors["defaultPassword"] = "Password cannot be empty";
    } else if (defaultPassword.length < 8) {
      errors["defaultPassword"] = "Password must be at least 8 characters";
    }

    if (!department.trim()) {
      errors["department"] = "Department cannot be empty";
    }

    if (!position.trim()) {
      errors["position"] = "Position cannot be empty";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      console.log("Email:", email);
      console.log("Password:", defaultPassword);
      console.log("Full Name:", fullName);
      console.log("Department:", department);
      console.log("Position:", position);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10 ">
     
        <div className="w-[70vw] bg-white  h-full  p-20 shadow-2xl rounded-lg grid grid-cols-2 gap-3 md:gird-cols-2 ">
        
        <h2 className="text-1xl  font-semibold text-gray-700 ">
            Add an Employee 
            </h2>
            <div><svg xmlns="http://www.w3.org/2000/svg" fill="current"  stroke-width="1.5" stroke="white" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg></div>
          
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
               
              <h2 className="text-3xl font-bold text-[#264667] mr-50 mt-4 pt-0.5">
              New Employee
            </h2>
            <h2 className="text-1xl font-bold text-gray-500 mr-50 mt-4 mb-10">
              Create an employee email
            </h2>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  placeholder="Input full name"
                  onChange={(e) => setFullName(e.target.value)}
                  className="mt-1 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Add the new email:example@aqs.org"
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
            
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={department}
                  placeholder="Department"
                  onChange={(e) => setDepartment(e.target.value)}
                  className="mt-1 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.department && (
                  <p className="text-red-500 text-sm mt-1">{errors.department}</p>
                )}
              </div>

              <div>
               
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={position}
                  placeholder="Position"
                  onChange={(e) => setPosition(e.target.value)}
                  className="mt-1 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.position && (
                  <p className="text-red-500 text-sm mt-1">{errors.position}</p>
                )}
              </div>

              <div className="relative">
        
                <input
                  type={showPassword ? "text" : "password"}
                  id="defaultPassword"
                  name="defaultPassword"
                  value={defaultPassword}
                  placeholder="Enter at least 8+ characters"
                  onChange={(e) => setDefaultPassword(e.target.value)}
                  className="mt-1 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                 <FaEye
                              className="absolute right-7 bottom-1/3 transform text-gray-400 cursor-pointer"
                              onClick={() => setShowPassword(!showPassword)}
                           />
            
                {errors.defaultPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.defaultPassword}</p>
                )}
              </div>
              <div>
                
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Add his current email:example@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <Btn text="Send an invite" />
             
            </form>
            <div className="col-span-2">
          <img src={addImage} alt="Add Image" className="max-h-60 mx-96  my-8 -mr-3" />
        </div>
        </div>
      
    </div>
  );
}

export default CreateEmailEmployee;
