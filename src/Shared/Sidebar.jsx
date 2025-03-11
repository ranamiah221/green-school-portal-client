import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="">
            <ul className="menu">
                <li><NavLink to={'/'}>Dashboard</NavLink></li>
                <li>
                    <details close>
                        <summary>Students</summary>
                        <ul>
                            <li><NavLink to={'/addStudent'}>Add Student</NavLink></li>
                            <li><NavLink to={'/allStudents'}>All Students</NavLink></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details close>
                        <summary>Teachers</summary>
                        <ul>
                        <li><NavLink to={'/addTeacher'}>Add Teacher</NavLink></li>
                        <li><NavLink to={'/allTeachers'}>All Teachers</NavLink></li>
                        </ul>
                    </details>
                </li>
            </ul>

        </div>
    );
};

export default Sidebar;