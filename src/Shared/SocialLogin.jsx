import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";


const SocialLogin = () => {
    const {googleLogin} = useAuth()
    const handleGoogleLogin=()=>{
        googleLogin()
        .then(res => {
            Swal.fire({
                title: "Logged User!",
                text: "You clicked the button!",
                icon: "success"
              });
        })
        .catch(err=>{
          console.log(err)   
        })
      }
    return (
        <div className="card  rounded-box grid h-20 place-items-center">
        <button onClick={handleGoogleLogin} className="text-xl border-2 rounded-md p-2"> <FaGoogle /></button>
     </div>
    );
};

export default SocialLogin;