import { NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiStudentBold } from "react-icons/pi";
import { MdSubject,MdAdd } from "react-icons/md";
import { IoIosPersonAdd } from "react-icons/io";
import { FaCloudMeatball,FaReplyAll, FaChalkboardTeacher  } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import { AiTwotoneNotification } from "react-icons/ai";

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
                            <li><NavLink to='dashbord' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-blue-400" : ""}><LuLayoutDashboard />Dashboard</NavLink></li>
                            <li>
                                <details close>
                                    <summary><PiStudentBold />Students</summary>
                                    <ul>
                                        <li><NavLink to={'/addStudent'} className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "bg-blue-400" : ""}><IoIosPersonAdd />Add Student</NavLink></li>
                                        <li><NavLink to={'/allStudents'} className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "bg-blue-400" : ""}><FaCloudMeatball />All Students</NavLink></li>

                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details close>
                                    <summary><FaChalkboardTeacher />Teachers</summary>
                                    <ul>
                                        <li><NavLink to={'/addTeacher'} className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "bg-blue-400" : ""}><MdAdd />Add Teacher</NavLink></li>
                                        <li><NavLink to={'/allTeachers'} className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "bg-blue-400" : ""}><FaReplyAll />All Teachers</NavLink></li>

                                    </ul>
                                </details>
                            </li>

                            {/* subjects  */}
                            <li><NavLink to={'/subjects'} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-blue-400" : ""}><MdSubject />Subjects</NavLink></li>
                            {/* setting */}
                            <li><NavLink to={'/notice'} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-blue-400" : ""}><AiTwotoneNotification />Notice</NavLink></li>
                            {/* setting */}
                            <li>
                                <details close>
                                    <summary><IoSettingsSharp />Setting</summary>
                                    <ul>
                                         <li><NavLink to={'/teacher/t_home'} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-blue-400" : ""}><GiTeacher />Teacher Dashboard</NavLink></li>
                                <li><NavLink to={'/student/s_home'} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-blue-400" : ""}><PiStudentBold />Student Dashboard</NavLink></li>

                                    </ul>
                                </details>
                            </li>
                        </>
            </ul>

        </div >
    );
};

export default Sidebar;