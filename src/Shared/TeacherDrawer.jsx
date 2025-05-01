import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaHome } from 'react-icons/fa';
import { MdOutlineWidgets } from 'react-icons/md';
import { PiExamFill } from 'react-icons/pi';
import { RiQuestionAnswerFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const TeacherDrawer = () => {
    return (
        <div className=" text-white">
            <ul className="menu text-base font-medium">
                <>
                    <li><NavLink to={'/teacher/t_home'} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-blue-900" : ""}>
                        <FaHome /> Home</NavLink></li>
                    <li><NavLink to={'/teacher/t_test'} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-blue-900" : ""}>
                        <RiQuestionAnswerFill />Test</NavLink></li>
                    <li><NavLink to={'/teacher/t_result'} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-blue-900" : ""}>
                        <PiExamFill />Result</NavLink></li>
                    <li><NavLink to={'/teacher/t_profile'} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-blue-900" : ""}>
                        <CgProfile />Profile</NavLink></li>
                    <li><NavLink to={'/teacher/t_create'} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-blue-900" : ""}>
                        <MdOutlineWidgets />Create New</NavLink></li>
                </>
            </ul>

        </div >
    );
};

export default TeacherDrawer;