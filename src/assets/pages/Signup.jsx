import React, { useState } from "react";
import groupImage from "../images/Group.png";
import Button from "../components/Button";
import Google from "../images/Vector.png";
import Facebook from "../images/Logo facebook.png";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";


function Signup() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [showPassword, setShowPassword] = useState(false);
   const [errors, setErrors] = useState({});

   const handleValidation = () => {
      let errors = {};
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email) {
         errors["email"] = "Email cannot be empty";
      } else if (!emailRegex.test(email)) {
         errors["email"] = "Email is not valid";
      }

      if (!password) {
         errors.password = "Password cannot be empty";
      } else if (password.length < 6) {
         errors.password = "Password must be at least 6 characters";
      }

      setErrors(errors);
      return Object.keys(errors).length === 0;
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      if (handleValidation()) {
         console.log("Email: ", email);
         console.log("Password ", password);
      }
   };

   return (
      <div className="min-h-screen flex items-center justify-center py-10">
         <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-6xl w-full">
            <div className="w-[50vw] bg-[#264667] flex flex-col items-center justify-center text-white px-8">
               <img src={groupImage}
                  alt=""
                  className="filter brightness-75"
               />
               <div className="mt-4 space-y-4 text-center">
                  <p className="text-lg font-bold">
                     Welcome to Africa Quantitative Science
                  </p>
                  <p>
                     use your time well
                  </p>
               </div>
            </div>

            <div className="w-[50vw] bg-white flex items-center justify-center h-full flex-col p-2 shadow-md rounded-lg m-20">
               <div className="bg-white rounded-xlg p-6 border-black">
                  <h2 className="text-3xl font-bold text-black-700">
                     Begin your journey
                  </h2>
                  <form className="mt-6" onSubmit={handleSubmit}>
                     <div className="relative space-y-4">
                        <div className="flex gap-4">
                        <div>
                           <label htmlFor="fname" className="text-sm font-medium text-gray-700">
                              First Name
                           </label>
                           <input
                              type="text"
                              id="fname"
                              name="fname"
                              placeholder="Input first name"
                              className="mt-1 block w-40 px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                        </div>
                        <div>
                           <label htmlFor="lname" className="text-sm font-medium text-gray-700">
                              Last Name
                           </label>
                           <input
                              type="text"
                              id="lname"
                              name="lname"
                              placeholder="Input last name"
                              className="mt-1 block w-40 px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                           />
                        </div>
                        </div>
                        <div>
                           <label htmlFor="email" className="text-sm font-medium text-gray-700">
                              Email
                           </label>
                           <input
                              type="email"
                              id="email"
                              name="email"
                              value={email}
                              placeholder="example@gmail.com"
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              className="mt-1 block w-80 px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                           />
                        </div>
                        <div>
                           <label htmlFor="password" className="text-sm font-medium text-gray-700">
                              Password
                           </label>
                           <input
                              type="password"
                              id="password"
                              name="password"
                              value={password}
                              placeholder="Enter at least 8+ characters"
                              onChange={(e) => setPassword(e.target.value)}
                              required
                              className="mt-1 block w-80 px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                           />
                           <FaEye
                              className="absolute right-7 bottom-1/3 transform text-gray-400 cursor-pointer"
                              onClick={() => setShowPassword(!showPassword)}
                           />
                        </div>
                        <div className="flex items-center justify-between mb-4">
                           <input
                              type="checkbox"
                              id="termsofuse"
                              className="mr-2 leading-tight"
                           />
                           <label htmlFor="termsofuse" className="text-sm text-gray-700">
                              By signing up, I agree with the{" "}

                              <Link to="#" className="text-sm text-[#F48242] ml-auto">
                                 Terms of Use & Privacy Policy
                              </Link>
                           </label>
                        </div>
                        <Button text="Register" />
                     </div>
                  </form>
                  <div className="flex items-center justify-center mt-4">
                     <span className="border-b w-1/5 lg:w-1/4"></span>
                     <span className="text-xs text-center text-gray-500 uppercase mx-2">
                        or
                     </span>
                     <span className="border-b w-1/5 lg:w-1/4"></span>
                  </div>
                  <div>
                     <div className="mt-2 flex items-center justify-center gap-3">
                        <button className="w-20 px-4 py-2 flex items-center justify-center bg-[#FEF1F1] text-black rounded-md border-[1px] active:scale-[.98] active:duration-75 hover:scale-[1.01] transition-all ease-in-out">
                           <img src={Google} alt="Google" className="w-5 h-5 mr-2" />
                        </button>
                        <button className="w-20 px-4 py-2 flex items-center justify-center bg-[#F3F6FB] text-white rounded-md active:scale-[.98] active:duration-75 hover:scale-[1.01] transition-all ease-in-out">
                           <img src={Facebook} alt="Facebook" className="w-5 h-5 mr-2" />
                        </button>
                     </div>
                     <div className="flex items-center justify-between mt-6">
                        <p className="text-sm text-black">
                           Returning user?{" "}
                           <Link
                              to="/login"
                              className="text-[#F48242]"
                           >
                              Log in here
                           </Link>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Signup;