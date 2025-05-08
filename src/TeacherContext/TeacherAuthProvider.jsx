import axios from "axios";
import TeacherAuthContext from "./TeacherAuthContext";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../firebase/firebase.config";



const TeacherAuthProvider = ({children}) => {
    const [teacher, setTeacher]=useState()
    const [loading, setLoading]=useState(true)
    
    const signInTeacher=(phone, role)=>{
        console.log(phone, role)
        axios.get(`green-school-portal-server.vercel.app/teachers/${phone}`)
        .then(res=>{
           setLoading(true)
           setTeacher(res.data)
        })
    }

  
    const info ={
        teacher,
        signInTeacher,
    }
    return (
        <TeacherAuthContext.Provider value={info}>
            {children}
        </TeacherAuthContext.Provider>
    );
};

export default TeacherAuthProvider;