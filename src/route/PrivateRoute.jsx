import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../Shared/Loader";


const PrivateRoute = ({children}) => {
    const {user, loader}=useAuth();
    const location = useLocation();
    if(loader){
        return <Loader></Loader>
    }
    if(user){
        return children
    }
    return <Navigate to='signIn' state={location?.pathname}></Navigate>
};

export default PrivateRoute;