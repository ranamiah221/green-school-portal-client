import React, { useEffect, useState } from 'react';
import { FaPeoplePulling } from "react-icons/fa6";
import useStudents from '../../hooks/useStudents';
import useTeachers from '../../hooks/useTeachers';
import teacherLogo from '../../assets/Group 3.png'
import StudentNumber from './StudentNumber';
import StudentCategory from './StudentCategory';
import ShowNotice from './ShowNotice';
import CalendarComponent from './CalendarComponent';


const Dashboard = () => {
    const [students]=useStudents();
    const [teachers]=useTeachers();
    console.log(students, teachers);
    
    return (
        <>
        <div className='flex items-center justify-start gap-5'>
            {/* Students */}
            <div className='w-64 bg-base-100 shadow h-32 text-xl font-medium rounded-lg text-center px-5 flex justify-between items-center'>
                
                <div className='text-2xl text-white w-20 h-20 rounded-full bg-purple-700 flex justify-center items-center'>
                <FaPeoplePulling className='' />
                </div>
               
                <h2 className='border-l-2 px-2 border-green-500'>Students : <span>{students.length}</span></h2>

            </div>
            {/* teachers */}
            <div className='w-64 bg-base-100 shadow h-32 text-xl font-medium rounded-lg text-center px-5 flex justify-between items-center'>
                
                <div className='text-2xl text-white w-20 h-20 rounded-full bg-purple-700 flex justify-center items-center'>
                  <img src={teacherLogo} alt="" />
                </div>
               
                <h2 className='border-l-2 px-2 border-green-500'>Teachers : <span>{teachers.length}</span></h2>

            </div>

        </div>


        {/* notice board */}
        <div className='mt-10 flex justify-start  items-start gap-10'>
            <ShowNotice></ShowNotice>
            <CalendarComponent></CalendarComponent>
        </div>
        {/* recharts using.... */}
        <div className='flex justify-evenly items-center'>
             <StudentNumber></StudentNumber>
             <StudentCategory></StudentCategory>
        </div>
        </>
    );
};

export default Dashboard;