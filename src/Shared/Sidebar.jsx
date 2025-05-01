import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { PiExamFill } from "react-icons/pi";
import { RiQuestionAnswerFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWidgets } from "react-icons/md";
import { useState } from "react";
const Sidebar = () => {
    // const [interFace, setInterface]=useState(0)
    // const makeInterface=(value)=>{
    //   if(value ==0){
    //    setInterface(value)
    //   }
    //   else if(value == 2){
    //     setInterface(value)
    //   }
        
    // }
    return (
        <div className=" text-white">
            <ul className="menu text-base font-medium">
                    <>
                            <li><NavLink to='/' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-blue-400" : ""}>Dashboard</NavLink></li>
                            <li>
                                <details close>
                                    <summary>Students</summary>
                                    <ul>
                                        <li><NavLink to={'/addStudent'} className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "bg-blue-400" : ""}>Add Student</NavLink></li>
                                        <li><NavLink to={'/allStudents'} className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "bg-blue-400" : ""}>All Students</NavLink></li>

                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details close>
                                    <summary>Teachers</summary>
                                    <ul>
                                        <li><NavLink to={'/addTeacher'} className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "bg-blue-400" : ""}>Add Teacher</NavLink></li>
                                        <li><NavLink to={'/allTeachers'} className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "bg-blue-400" : ""}>All Teachers</NavLink></li>

                                    </ul>
                                </details>
                            </li>

                            {/* subjects  */}
                            <li><NavLink to={'/subjects'} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-blue-400" : ""}>Subjects</NavLink></li>
                            {/* setting */}
                            <li>
                                <details close>
                                    <summary>Setting</summary>
                                    <ul>
                                         <li><NavLink to={'/teacher/t_home'} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-blue-400" : ""}>Teacher Dashboard</NavLink></li>
                                <li><NavLink to={'/student/s_home'} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-blue-400" : ""}>Student Dashboard</NavLink></li>

                                    </ul>
                                </details>
                            </li>
                        </>
            </ul>

        </div >
    );
};

export default Sidebar;