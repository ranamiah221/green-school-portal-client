import Lottie from "lottie-react";
import loginImage from '../../assets/animation/login.json'
import { useContext } from "react";
import StudentAuthContext from "../StudentContext/StudentAuthContext";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const S_SignIn = () => {
    const { student, signInStudent } = useContext(StudentAuthContext)
    // const location = useLocation();
    const state='/student/s_home';
    const navigate = useNavigate();
    const handleStudentLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const classes = form.classes.value;
        const phone = form.phone.value;
        signInStudent(phone, classes, name)
        if (student?.phone == phone) {
            if (state == '/student/s_home') {
                navigate(state)
                Swal.fire("Student Sign in Successfull!");
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
                    <form onSubmit={handleStudentLogin} className="card-body">
                        <fieldset className="fieldset">
                            <h1 className="text-3xl text-center font-bold my-5">Student Sign In</h1>
                            <label className="fieldset-label">Name</label>
                            <input type="text" name="name" className="input" placeholder="Enter Your Name" />
                            <fieldset>
                                <legend className="fieldset-legend">class</legend>
                                <select name='classes' defaultValue="6" className="select">
                                    <option value={'6'}>6</option>
                                    <option value={'7'}>7</option>
                                    <option value={'8'}>8</option>
                                    <option value={'9'}>9</option>
                                    <option value={'10'}>10</option>
                                </select>
                            </fieldset>
                            <label className="fieldset-label">Phone</label>
                            <input type="text" name="phone" className="input" placeholder="Enter Your Phone number" />

                            <button type="submit" className="btn btn-neutral mt-4">Sign In</button>
                        </fieldset>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default S_SignIn;