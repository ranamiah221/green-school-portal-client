import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

import useSubject from "../../hooks/useSubject";


const Subjects = () => {
    const [subjects, refetch]=useSubject()
    const axiosSecure = useAxiosSecure();
    const handleDeleteSubject=(id)=>{
        axiosSecure.delete(`/subjects/${id}`)
        .then(res=>{
            if(res.data.deletedCount > 0){
                Swal.fire({
                    title: "Subject deleteed successful!",
                    icon: "success",
                    draggable: true
                });
                refetch();
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }
    const handleAddSubject = (e) => {
        e.preventDefault()
        const form = e.target;
        const subject = form.subject.value;
        const teacher = form.teacher.value;
        const classes = form.classes.value;
        const days = form.days.value;
        const subjectInfo = {
            subject,
            teacher,
            classes,
            days
        }
        axiosSecure.post('/subjects', subjectInfo)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Subject added successful!",
                        icon: "success",
                        draggable: true
                    });
                    // refetch the post data immedatetly.
                    form.reset();
                    refetch();
                   
                }
            })
            .catch(err => {
                console.log(err)
            })


    }
   
    return (
        <>
            <div className="bg-[#F0F1F3] shadow-2xl rounded-lg px-5 mb-10 pb-5">
                <h1 className="text-2xl font-medium pt-5 mb-5">All Subjects</h1>
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 ">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-light text-red-500">
                                <th>Subject Name</th>
                                <th>Teacher</th>
                                <th>Classes</th>
                                <th>Days</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                subjects?.map((subject)=>
                                 <tr key={subject._id}>
                                <th>{subject?.subject}</th>
                                <td>{subject?.teacher}</td>
                                <td>{subject?.classes}</td>
                                <td>{subject?.days}</td>
                                <td onClick={()=>handleDeleteSubject(subject._id)}>Delete</td>
                            </tr>)
                            }
                           
                           
                        </tbody>
                    </table>
                </div>


            </div>

            <div className="bg-[#F0F1F3] shadow-2xl rounded-lg px-5">
                <h1 className="text-2xl font-medium pt-5">Add New Subjects</h1>
                <form onSubmit={handleAddSubject} className="grid grid-cols-4 gap-5 mt-5">
                    <div>
                        <label className="fieldset-label">Subject Name*</label>
                        <input type="text" name="subject" className="input" placeholder="Subjects Name" required />
                    </div>
                    <div>
                        <label className="fieldset-label">Teacher*</label>
                        <input type="text" name="teacher" className="input" placeholder="Teacher" required />
                    </div>
                    <div>
                        <label className="fieldset-label">Classes*</label>
                        <input type="text" name="classes" className="input" placeholder="Classes" required />
                    </div>
                    <div>
                        <label className="fieldset-label">Days*</label>
                        <input type="text" name="days" className="input" placeholder="Days" required />
                    </div>
                    <div>
                        <div className="mb-5">
                            <button type="submit" className='text-base font-medium bg-red-700 text-white p-2 rounded-lg mt-5 mr-5'>Save</button>
                        </div>
                    </div>
                </form>

            </div>
        </>

    );
};

export default Subjects;