import Lottie from 'lottie-react';
import loginImage from '../../assets/animation/login.json'
import { useContext } from 'react';
import TeacherAuthContext from '../../TeacherContext/TeacherAuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const T_SignIn = () => {
    const {teacher,signInTeacher}=useContext(TeacherAuthContext);
    
    const handleTeacherLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const phone = form.phone.value;
        const role = form.role.value;
        signInTeacher(phone, role)
        if(teacher.teacherPhone === phone){
            Swal.fire("Teacher Login Successfull!");
        }
       

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={loginImage}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleTeacherLogin} className="card-body">
                        <fieldset className="fieldset">
                            <h1 className="text-5xl text-center font-bold my-5">Sign In </h1>
                            <label className="fieldset-label">Phone</label>
                            <input type="text" name="phone" className="input" placeholder="Enter Your phone no:" />
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
                            <button type="submit" className="btn btn-neutral mt-4">Sign In</button>
                        </fieldset>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default T_SignIn;