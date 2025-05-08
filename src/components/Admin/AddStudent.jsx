import React from 'react';
import Swal from 'sweetalert2';

const AddStudent = () => {
    const handleAddStudent = (e) => {
        e.preventDefault();
        const form =e.target;
        // student info
        const name= form.name.value;
        const gender= form.gender.value;
        const classes= form.classes.value;
        const birth = form.birth.value;
        const blood = form.blood.value;
        const religion= form.religion.value;
        const addmission= form.addmission.value;
        // parentInfo
        const fatherName=form.fatherName.value;
        const motherName=form.motherName.value;
        const email= form.email.value;
        const phone = form.phone.value;
        const fatherOccupation= form.fatherOccupation.value;
        const address = form.address.value;
        const fatherReligion= form.fatherReligion.value;
        const photoURL= form.photoURL.value;

        const student ={name,gender, classes, birth,blood, religion,addmission,fatherName,
             motherName, email, phone, fatherOccupation, address, fatherReligion, photoURL};
        fetch('green-school-portal-server.vercel.app/students', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(student)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                Swal.fire({
                    title: "Student Added Successfully !",
                    icon: "success",
                    draggable: true
                  });
            }
        })
    }
    return (
        <div>
            <h2 className='text-xl font-medium mb-8'>Add New Student</h2>
            <form onSubmit={handleAddStudent}>
                {/* student info... */}
                <div className='grid grid-cols-4 gap-5'>
                    <fieldset>
                        <legend className="fieldset-legend">Name*</legend>
                        <input type="text" name='name' className="input" placeholder="Enter your name " />
                    </fieldset>
                    <fieldset>
                        <legend className="fieldset-legend">Gender*</legend>
                        <select name='gender' defaultValue="Male" className="select">
                            <option value={'Male'}>Male</option>
                            <option value={'Female'}>Female</option>
                            <option value={'Another'}>Another</option>  
                        </select>
                    </fieldset>
                    <fieldset>
                        <legend className="fieldset-legend">class*</legend>
                        <select name='classes' defaultValue="6" className="select">
                            <option value={'6'}>6</option>  
                            <option value={'7'}>7</option>
                            <option value={'8'}>8</option>
                            <option value={'9'}>9</option>  
                            <option value={'10'}>10</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <legend className="fieldset-legend">Date of Birth*</legend>
                        <input type="date" name='birth' className="input" placeholder="Enter your name " />
                    </fieldset>
                    <fieldset>
                        <legend className="fieldset-legend">Blood Group*</legend>
                        <input type="text" name='blood' className="input" placeholder="Enter your name " />
                    </fieldset>
                    <fieldset>
                        <legend className="fieldset-legend">Religion*</legend>
                        <select name='religion' defaultValue="Islam" className="select">
                            <option value={'Islam'}>Islam</option>
                            <option value={'Hindu'}>Hindu</option>
                            <option value={'Khistan'}>Khistan</option>
                            <option value={'Buddhist'}>Buddhist</option> 
                             
                        </select>
                    </fieldset>
                    <fieldset>
                        <legend className="fieldset-legend">Addmission Date*</legend>
                        <input type="date" name='addmission' className="input" placeholder="Enter your name " />
                    </fieldset>
                </div>
                {/* parent info.... */}
                <h2 className='text-xl font-medium my-8'>Add Parents Details</h2>
                <div className='grid grid-cols-4 gap-5'>
                    <fieldset>
                        <legend className="fieldset-legend">Father Name*</legend>
                        <input type="text" name='fatherName' className="input" placeholder="Enter your father name " />
                    </fieldset>
                    <fieldset>
                        <legend className="fieldset-legend">Mother Name*</legend>
                        <input type="text" name='motherName' className="input" placeholder="Enter your mother name " />
                    </fieldset>
                    <fieldset>
                        <legend className="fieldset-legend">Email*</legend>
                        <input type="email" name='email' className="input" placeholder="Enter your email " />
                    </fieldset>
                    <fieldset>
                        <legend className="fieldset-legend">Phone*</legend>
                        <input type="text" name='phone' className="input" placeholder="Enter your phone number " />
                    </fieldset>
                    <fieldset>
                        <legend className="fieldset-legend">Father Occupation*</legend>
                        <input type="text" name='fatherOccupation' className="input" placeholder="Enter your father occupation " />
                    </fieldset>
                   
                    <fieldset>
                        <legend className="fieldset-legend">Address*</legend>
                        <input type="text" name='address' className="input" placeholder="Enter your Address " />
                    </fieldset>
                    <fieldset>
                        <legend className="fieldset-legend">Religion*</legend>
                        <select name='fatherReligion' defaultValue="Islam" className="select">
                            <option value={'Islam'}>Islam</option>
                            <option value={'Hindu'}>Hindu</option>
                            <option value={'Khistan'}>Khistan</option>
                            <option value={'Buddhist'}>Buddhist</option> 
                             
                        </select>
                    </fieldset>

                </div>
                <fieldset>
                        <legend className="fieldset-legend">Photo URL*</legend>
                        <input type="text" name='photoURL' className="input" placeholder="Enter Student Photo url " />
                 </fieldset>
                <div >
                <button className='text-base font-medium bg-green-500 text-white p-2 rounded-lg mt-5 mr-5'>Submit</button>
                <button className='text-base font-medium bg-red-500 text-white p-2 rounded-lg mt-5'>Reset</button>
                </div>
               
                
            </form>
        </div>
    );
};

export default AddStudent;