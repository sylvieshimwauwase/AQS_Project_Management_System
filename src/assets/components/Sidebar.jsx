import React from 'react'
import { FaHome, FaPoll, FaRegEnvelope, FaRegFileAlt,  } from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6'

function Sidebar() {
  return (
    <div className='w-50 bg-[#264667] fixed h-full px-4 py-2'>
        <div className='my-2 mb-4'>
            <h1 className='text-2x text-white font-bold'>HOD DASHBOARD</h1>
        </div>
        <hr />
        <ul className='mt-3 text-white font-bold'>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <a href='' className='px-3'>
                    <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome></a>Dashboard</li>

                    <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <a href='' className='px-3'>
                    <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome></a>Employee</li>

                    <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <a href='' className='px-3'>
                    <FaPoll className='inline-block w-6 h-6 mr-2 -mt-2'></FaPoll></a>Projects</li>


                    <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <a href='' className='px-3'>
                    <FaRegEnvelope className='inline-block w-6 h-6 mr-2 -mt-2'></FaRegEnvelope></a>Messages</li>

                    <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <a href='' className='px-3'>
                    <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome></a>Schedule</li>

                    <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <a href='' className='px-3'>
                    <FaRegFileAlt className='inline-block w-6 h-6 mr-2 -mt-2'></FaRegFileAlt></a>Report</li>
                    
        </ul>
      
    </div>
  )
}

export default Sidebar
