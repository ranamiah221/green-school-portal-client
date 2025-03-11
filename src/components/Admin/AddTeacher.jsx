import Swal from "sweetalert2";


const AddTeacher = () => {
    const handleAddTeacher = (e) => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const teacherGender = form.teacherGender.value;
        const teacherBirth = form.teacherBirth.value;
        const teacherBlood = form.teacherBlood.value;
        const teacherReligion = form.teacherReligion.value;
        const teacherEmail = form.teacherEmail.value;
        const teacherPhone = form.teacherPhone.value;
        const role = form.role.value;
        const teacherAddress = form.teacherAddress.value;
        const entry = form.entry.value;
        const teacherPhotoURL = form.teacherPhotoURL.value;
        const teacher = { firstName, lastName, teacherGender, teacherBirth, teacherBlood, teacherReligion, teacherEmail, teacherPhone, teacherAddress, role, entry, teacherPhotoURL };
        fetch('http://localhost:8000/teachers', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(teacher)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Teacher Added Successfully !",
                        icon: "success",
                        draggable: true
                    });
                }
            })



    }
    return (
        <div>
            <h2 className='text-xl font-medium mb-8'>Add New Teacher</h2>
            <form onSubmit={handleAddTeacher}>
                {/* student info... */}
                <div className='grid grid-cols-4 gap-5'>
                    <fieldset>
                        <legend className="fieldset-legend">First Name*</legend>
                        <input type="text" name='firstName' className="input" placeholder="Enter your first name " />
                    </fieldset>
                    <fieldset>
                        <legend className="fieldset-legend">Last Name*</legend>
                        <input type="text" name='lastName' className="input" placeholder="Enter your last name " />
                    </fieldset>
                    <fieldset>
                        <legend className="fieldset-legend">Gender*</legend>
                        <select name='teacherGender' defaultValue="Male" className="select">
                            <option value={'Male'}>Male</option>
                            <option value={'Female'}>Female</option>
                            <option value={'Another'}>Another</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <legend className="fieldset-legend">Date of Birth*</legend>
                        <input type="date" name='teacherBirth' className="input" placeholder="Enter your name " />
                    </fieldset>
                    <fieldset>
                        <legend className="fieldset-legend">Blood Group*</legend>
                        <input type="text" name='teacherBlood' className="input" placeholder="Enter your name " />
                    </fieldset>
                    <fieldset>
                        <legend className="fieldset-legend">Religion*</legend>
                        <select name='teacherReligion' defaultValue="Islam" className="select">
                            <option value={'Islam'}>Islam</option>
                            <option value={'Hindu'}>Hindu</option>
                            <option value={'Khistan'}>Khistan</option>
                            <option value={'Buddhist'}>Buddhist</option>

                        </select>
                    </fieldset>
                    <fieldset>
                        <legend className="fieldset-legend">Email*</legend>
                        <input type="email" name='teacherEmail' className="input" placeholder="Enter your email " />
                    </fieldset>
                    <fieldset>
                        <legend className="fieldset-legend">Phone*</legend>
                        <input type="text" name='teacherPhone' className="input" placeholder="Enter your phone number " />
                    </fieldset>
                    <fieldset>
                        <legend className="fieldset-legend">Role*</legend>
                        <select name='role' defaultValue="Teacher" className="select">
                            <option value={'Teacher'}>Teacher</option>
                            <option value={'Assistant Teacher'}>Assistant Teacher</option>
                            <option value={'Senior Lecturer'}>Senior Teacher</option>
                            <option value={'Assistant Head Teacher'}>Assistant Head Teacher</option>
                            <option value={'Head Teacher'}>Head Teacher</option>


                        </select>
                    </fieldset>
                    <fieldset>
                        <legend className="fieldset-legend">Address*</legend>
                        <input type="text" name='teacherAddress' className="input" placeholder="Enter your Address " />
                    </fieldset>
                    <fieldset>
                        <legend className="fieldset-legend">Entry Date*</legend>
                        <input type="date" name='entry' className="input" placeholder="Enter your name " />
                    </fieldset>
                </div>
                <fieldset>
                    <legend className="fieldset-legend">Photo URL*</legend>
                    <input type="text" name='teacherPhotoURL' className="input" placeholder="Enter Student Photo url " />
                </fieldset>
                <div >
                    <button type="submit" className='text-base font-medium bg-green-500 text-white p-2 rounded-lg mt-5 mr-5'>Submit</button>
                    <button className='text-base font-medium bg-red-500 text-white p-2 rounded-lg mt-5'>Reset</button>
                </div>


            </form>
        </div>
    );
};

export default AddTeacher;