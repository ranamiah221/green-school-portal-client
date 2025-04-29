import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { PiExamFill } from "react-icons/pi";
import { RiQuestionAnswerFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWidgets } from "react-icons/md";
const Sidebar = () => {
    let isAdmin = false
    return (
        <div className=" text-white">
            <ul className="menu text-base font-medium">
                {
                    isAdmin ? <>
                        <li><NavLink to='/t_home' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-blue-900" : ""}>
                            <FaHome /> Home</NavLink></li>
                        <li><NavLink to='/t_test' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-blue-900" : ""}>
                            <RiQuestionAnswerFill />Test</NavLink></li>
                        <li><NavLink to='/t_result' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-blue-900" : ""}>
                            <PiExamFill />Result</NavLink></li>
                        <li><NavLink to='/t_profile' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-blue-900" : ""}>
                            <CgProfile />Profile</NavLink></li>
                        <li><NavLink to='/t_create' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-blue-900" : ""}>
                            <MdOutlineWidgets />Create New</NavLink></li>

                    </> :
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
                        </>
                }

            </ul>

        </div >
    );
};

export default Sidebar;