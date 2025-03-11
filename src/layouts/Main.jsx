import { Outlet } from "react-router-dom";
import Sidebar from "../Shared/Sidebar";


const Main = () => {
    return (
        <div className="flex justify-between">
            <div className="w-48 bg-green-500 h-screen p-5"><Sidebar></Sidebar></div>
            <div className="flex-1/2 p-5"><Outlet></Outlet></div>
        </div>
    );
};

export default Main;