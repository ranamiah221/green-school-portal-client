import Lottie from "lottie-react";
import registerAnimation from '../../assets/animation/register.json'
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
    const { createUser } = useAuth()
    const navigate = useNavigate()
    const state = '/sign-in-pages/admin-signIn';
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const adminName = form.adminName.value;
        const schoolName = form.schoolName.value;
        const adminUser = { email, password, adminName, schoolName }
        createUser(email, password)
            .then(res => {
                axios.post('http://localhost:8000/adminUser', adminUser)
                    .then(res => {
                        if (res.data.insertedId) {
                            if (state == '/sign-in-pages/admin-signIn') {
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "SignUp successfull",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate(state)
                            }

                        }
                    })

            })
            .catch(err => {
                const error = err.message.split('/')[1].split(')')[0]
                Swal.fire({
                    title: `${error}`,
                    text: 'Already you have been account please signin',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={registerAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">
                            <h1 className="text-5xl text-center font-bold my-5">Admin SignIn</h1>

                            <label className="fieldset-label">Admin Name</label>
                            <input type="text" name="adminName" className="input" placeholder="Enter Your Name" />
                            <label className="fieldset-label">Schoole Name</label>

                            <input type="text" name="schoolName" className="input" placeholder="Enter Your School Name" />
                            <label className="fieldset-label">Email</label>

                            <input type="email" name="email" className="input" placeholder="Enter Your Email" />
                            <label className="fieldset-label">Password</label>

                            <input type="password" name='password' className="input" placeholder="Enter Your Password" />
                            <button type="submit" className="btn btn-neutral mt-4">Register</button>
                        </fieldset>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;