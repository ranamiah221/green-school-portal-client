import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";


const AllTeachers = () => {
    const loadedTeacher = useLoaderData();
    const [teachers, setTeacher]= useState(loadedTeacher);

    return (
        <div>
            <h2 className="text-2xl font-medium mb-10">All Teacher Data {teachers.length}</h2>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Role</th>
                            <th>Subjects</th>
                            <th>Address</th>
                            <th>Date of Birth</th>
                            <th>Phone</th>
                            <th>View</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            teachers.map((teacher, idx) => <tr key={teacher._id}>
                                <th>{idx + 1}</th>
                                <td>{teacher.firstName} {teacher.firstName}</td>
                                <td>{teacher.teacherGender}</td>
                                <td>{teacher.role}</td>
                                <td defaultValue='All'>{teacher.subject}</td>
                                <td>{teacher.teacherAddress}</td>
                                <td>{teacher.teacherBirth}</td>
                                <td>{teacher.teacherPhone}</td>
                                <td className="text-xl"><IoEyeOutline /></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllTeachers;