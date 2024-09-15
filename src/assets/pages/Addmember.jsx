// import React, { useState } from "react";
// import Button from "../components/Button";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// function Addmember() {
//   const [email, setEmail] = useState("");
//   const [defaultPassword, setDefaultPassword] = useState("");
//   const [fullName, setFullName] = useState("");
//   const [department, setDepartment] = useState("");
//   const [position, setPosition] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});

//   const handleValidation = () => {
//     let errors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!fullName.trim()) {
//       errors["fullName"] = "Full name of the employee";
//     }

//     if (!nationality.trim()) {
//       errors["nationality"] = "nationality of the employee";
//     }
//     if (!gender.trim()) {
//       errors["gender"] = "gender of the employee";
//     }
//     if (!idnumber.trim()) {
//       errors["idnumber"] = "Identification of the employee";
//     }

//     if (!email) {
//       errors["email"] = "Email cannot be empty";
//     } else if (!emailRegex.test(email)) {
//       errors["email"] = "Email is not valid";
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (handleValidation()) {
//       console.log("Email:", email);
//       console.log("Password:", defaultPassword);
//       console.log("Full Name:", fullName);
//       console.log("Department:", department);
//       console.log("Position:", position);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center py-10">
//       <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl w-full">
//         <div className="w-[50vw] bg-[#264667] flex flex-col items-center justify-center text-white px-8">
//           <div className="mt-4 space-y-4 text-center"></div>
//         </div>
//         <h2 className="text-3xl font-bold text-gray-700 mb-6">
//           Add a member to the team
//         </h2>
//         <h2 className="text-1xl font-bold text-gray-700 mb-2">
//           Fields are mendatory
//         </h2>

//         <div className="w-[50vw] bg-white flex items-center justify-center h-full flex-col p-10 shadow-md rounded-lg">
//           <div className="bg-white p-6 border border-gray-300 rounded-lg w-full max-w-md">
//             <h2 className="text-3xl font-bold text-gray-700 mb-6">
//               Choose a title
//             </h2>
//             <h2 className="text-1xl font-bold text-gray-500 mb-6">
//               Profile picture
//             </h2>
//             <form className="space-y-6" onSubmit={handleSubmit}>
//               <div>
//                 <label
//                   htmlFor="fullName"
//                   className="text-sm font-medium text-gray-700"
//                 >
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="fullName"
//                   name="fullName"
//                   value={fullName}
//                   placeholder="Input full name"
//                   onChange={(e) => setFullName(e.target.value)}
//                   className="mt-1 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 />
//                 {errors.fullName && (
//                   <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
//                 )}
//               </div>

//               <div>
//                 <label
//                   htmlFor="nationality"
//                   className="text-sm font-medium text-gray-700"
//                 >
//                   Nationality
//                 </label>
//                 <select id="" name="country">
//                   type="text" value={nationality}
//                   onChange={(e) => setNationality(e.target.value)}
//                 </select>
//                 {errors.nationality && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.nationality}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label
//                   htmlFor="gender"
//                   className="text-sm font-medium text-gray-700"
//                 >
//                   gender
//                 </label>
//                 <input
//                   type="text"
//                   id="gender"
//                   name="gender"
//                   value={gender}
//                   placeholder="Input gender"
//                   onChange={(e) => setGender(e.target.value)}
//                   className="mt-1 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 />
//                 {errors.fullName && (
//                   <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
//                 )}
//               </div>

//               <div>
//                 <label
//                   htmlFor="identification"
//                   className="text-sm font-medium text-gray-700"
//                 >
//                   ID Number
//                 </label>
//                 <input
//                   type="text"
//                   id="idnumber"
//                   name="idnumber"
//                   value={fullName}
//                   placeholder="Input your identification number"
//                   onChange={(e) => setIdnumber(e.target.value)}
//                   className="mt-1 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 />
//                 {errors.idnumber && (
//                   <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
//                 )}
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="text-sm font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={email}
//                   placeholder="example@gmail.com"
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="mt-1 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//                 )}
//               </div>

//               <Button text="Send" />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Addmember;
