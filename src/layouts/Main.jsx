import { Outlet } from "react-router-dom";
import Sidebar from "../Shared/Sidebar";
import logo from '../assets/green logo.png'
import { FaRegMessage } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";

const Main = () => {
    return (
        <>
            <div className="flex justify-between h-20 shadow-xl ">
                <div className="w-48 bg-red-500 p-2">
                    <img className="w-16" src={logo} alt="" />
                </div>
                <div className="flex-1/2 p-5  flex justify-between items-center">
                    <input type="text" placeholder="Search " className="input" />
                    <div className="flex justify-between items-center text-xl font-medium gap-3">
                        <FaRegMessage />
                        <IoMdNotificationsOutline />
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                <div className="w-48 bg-green-500 min-h-screen px-5 pt-3"><Sidebar></Sidebar></div>
                <div className="flex-1/2 p-5"><Outlet></Outlet></div>
            </div>
        </>

    );
};

export default Main;