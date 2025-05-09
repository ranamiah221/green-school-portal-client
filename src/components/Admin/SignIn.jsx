import Lottie from 'lottie-react';
import loginImage from '../../assets/animation/login.json'
import SocialLogin from '../../Shared/SocialLogin';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignIn = () => {
    const {signIn}= useAuth()
    const location =useLocation()
    const navigate = useNavigate()
    const state='/dashboard/home'
    const handleLogin =(e)=>{
        e.preventDefault()
      const form = e.target;
      const email= form.email.value;
      const password = form.password.value;
      signIn(email, password)
      .then(res=>{
        if(state =='/dashboard/home'){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "SignIn Successfull",
            showConfirmButton: false,
            timer: 1500
          });
          navigate(state)
        }

        // to do navigate to go places......
      })
      .catch(err=>{
        console.log(err)
      })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left w-96">
                <Lottie animationData={loginImage}></Lottie>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        <h1 className="text-3xl text-center font-bold my-5">Admin Login</h1>
                        <label className="fieldset-label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" />
                        <label className="fieldset-label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <button type="submit" className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    
                </form>
                <div className="flex w-full flex-col">
                        <div className="divider">OR</div>
                        <SocialLogin></SocialLogin>
                    </div>
            </div>
        </div>
    </div>
    );
};

export default SignIn;