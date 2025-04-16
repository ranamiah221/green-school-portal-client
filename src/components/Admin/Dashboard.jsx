import React, { useEffect, useState } from 'react';
import { FaPeoplePulling } from "react-icons/fa6";

const Dashboard = () => {

    const [students, setStudent]=useState([]);
    
    
    useEffect(()=>{
        fetch('http://localhost:8000/students')
        .then(res=>res.json())
        .then(data =>{
            setStudent(data)
        })
    },[])
    return (
        <div>
            <div className='w-64 bg-base-100 shadow h-32 text-xl font-medium rounded-lg text-center px-5 flex justify-between items-center'>
                
                <div className='text-2xl text-white w-20 h-20 rounded-full bg-purple-700 flex justify-center items-center'>
                <FaPeoplePulling className='' />
                </div>
               
                <h2 className='border-l-2 px-2 border-green-500'>Student : <span>{students.length}</span></h2>

            </div>
        </div>
    );
};

export default Dashboard;