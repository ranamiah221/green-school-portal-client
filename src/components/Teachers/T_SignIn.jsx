import Lottie from 'lottie-react';
import loginImage from '../../assets/animation/login.json'
import { useContext } from 'react';
import TeacherAuthContext from '../../TeacherContext/TeacherAuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const T_SignIn = () => {
    const {teacher,signInTeacher}=useContext(TeacherAuthContext);
    // const location = useLocation();
    const state='/teacher/t_home';
    const navigate= useNavigate()
    // console.log(location?.state, state);
    const handleTeacherLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInTeacher(email, password)
        if(teacher?.teacherEmail == email){
            if(state=='/teacher/t_home'){
               navigate(state)
               Swal.fire("Teacher Sign in Successfull!");
            }
          
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
                            <h1 className="text-3xl text-center font-bold my-5">Teacher Sign In</h1>
                            <label className="fieldset-label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Enter Your Email" />
                             <label className="fieldset-label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Enter Your Password" />

                            <button type="submit" className="btn btn-neutral mt-4">Sign In</button>
                        </fieldset>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default T_SignIn;