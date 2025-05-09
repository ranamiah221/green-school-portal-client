import React, { useContext } from 'react';
import logo from '../assets/green logo.png'
import { FaRegMessage } from 'react-icons/fa6';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import TeacherDrawer from '../Shared/TeacherDrawer';
import TeacherAuthContext from '../TeacherContext/TeacherAuthContext';
import Swal from 'sweetalert2';

const TeacherDashBoard = () => {
    const {teacher}=useContext(TeacherAuthContext);
    const navigate = useNavigate();
     const handleLogOut = () => {
            Swal.fire({
                title: "Are you sure?",
                text: "You want to logout here!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Log Out!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/')
                    Swal.fire({
                        title: "Log Out",
                        text: "Log out successfully.",
                        icon: "success"
                    });
                }
            });
        }
    
    return (
        <>
            <div className={"flex h-20  justify-between shadow-xl"}>
                <div className="w-64 bg-red-400 p-2">
                    <img className="w-16" src={logo} alt="" />
                </div>

                <div className="flex-1/2 p-5  flex justify-between items-center">
                    <input type="text" placeholder="Search " className="input" />
                    <div className="flex justify-between items-center text-xl font-medium gap-3">
                        <FaRegMessage />
                        <IoMdNotificationsOutline />
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full ">
                                    {
                                        teacher ? <>
                                          <p className="text-xl uppercase bg-gray-500 flex items-center justify-center h-full">{teacher?.firstName?.slice(0,2).toUpperCase()}</p>
                                        </>
                                        :
                                        <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    }

                                  


                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                       {
                                        teacher &&  <li onClick={()=>handleLogOut()} className="btn btn-sm mb-2">
                                        <Link to='t_signIn'>Log Out</Link>
                                    </li> 
                                       }
                                       

                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex justify-between">
                <div className="w-64 bg-purple-800 min-h-screen px-5 pt-3"><TeacherDrawer></TeacherDrawer></div>
                <div className="flex-1/2 p-5"><Outlet></Outlet></div>
            </div>
        </>

    );
};

export default TeacherDashBoard;