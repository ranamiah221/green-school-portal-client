import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";



const AllStudents = () => {
    const loadedStudent = useLoaderData();
    const [students, setSudent] = useState(loadedStudent)

    return (
        <div>
            <h2 className="text-2xl font-medium mb-10">All Student Data</h2>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Class</th>
                            <th>Parents</th>
                            <th>Address</th>
                            <th>Date of Birth</th>
                            <th>Phone</th>
                            <th>View</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((student, idx) => <tr key={student._id}>
                                <th>{idx + 1}</th>
                                <td>{student.name}</td>
                                <td>{student.gender}</td>
                                <td>{student.classes}</td>
                                <td>{student.fatherName}</td>
                                <td>{student.address}</td>
                                <td>{student.birth}</td>
                                <td>{student.phone}</td>
                                <Link to={`/allStudents/${student._id}`}><td className="text-xl"><IoEyeOutline /></td></Link>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default AllStudents;