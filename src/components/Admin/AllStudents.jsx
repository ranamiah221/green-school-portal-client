import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";



const AllStudents = () => {
    const loadedStudent = useLoaderData();
    const [students, setSudent] = useState(loadedStudent)
    const handleStudentDelete = (_id) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:8000/students/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Student has been deleted.",
                                icon: "success"
                            });
                            const remainder = students.filter(student => student._id !== _id)
                            setSudent(remainder)
                        }
                    })
            }
        });

    }

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
                            <th>Action</th>

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
                                <td className="text-xl"><span><Link to={`/allStudents/${student._id}`}></Link></span><IoEyeOutline /></td>
                                <td onClick={() => handleStudentDelete(student._id)} className="text-xl"><MdOutlineDeleteOutline /></td>


                            </tr>)
                        }

                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default AllStudents;