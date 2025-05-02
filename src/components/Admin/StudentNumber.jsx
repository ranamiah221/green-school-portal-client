import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';
// import Chart from './Chart';

import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

// const data = [
//     {
//         name: "Page A",
//         uv: 4000,
//         pv: 2400,
//         amt: 2400,
//     },
//     {
//         name: "Page B",
//         uv: 3000,
//         pv: 1398,
//         amt: 2210,
//     },
//     {
//         name: "Page C",
//         uv: 2000,
//         pv: 9800,
//         amt: 2290,
//     },
//     {
//         name: "Page D",
//         uv: 2780,
//         pv: 3908,
//         amt: 2000,
//     },
//     {
//         name: "Page E",
//         uv: 1890,
//         pv: 4800,
//         amt: 2181,
//     },
    
// ];

const StudentNumber = () => {
    const [students, setStudents]=useState([]);
    // const classSix =students.filter(student=> student.class =='6')
    // console.log(classSix);
    // console.log(students);
    const axiosSecure = useAxiosSecure();
    useEffect(()=>{
        axiosSecure.get('/students')
        .then(res =>{
           const studentData = res.data;
           const fakeStudentData = studentData.map(student=>{
            const obj={
                class: student.classes,

            }
            return obj;
           })
           setStudents(fakeStudentData)

        })
    },[])
    return (
        <div>
        <BarChart width={250} height={200} data={students}>
          <Bar dataKey="class" fill="#8884d8" />
        </BarChart>
        </div>
    );
};

export default StudentNumber;