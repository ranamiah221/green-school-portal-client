import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className=" text-white">
            <ul className="menu text-base font-medium">
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
        </ul>

        </div >
    );
};

export default Sidebar;