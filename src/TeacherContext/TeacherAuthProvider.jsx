import axios from "axios";
import TeacherAuthContext from "./TeacherAuthContext";
import {  useState } from "react";




const TeacherAuthProvider = ({children}) => {
    const [teacher, setTeacher]=useState(null)
    const [loading, setLoading]=useState(true)
    
    const signInTeacher=(email, password)=>{
        
        axios.get(`http://localhost:8000/teachers/${email}`)
        .then(res=>{
           setLoading(true)
           setTeacher(res.data)
        })
    }

  
    const info ={
        teacher,
        signInTeacher,
        loading
    }
    return (
        <TeacherAuthContext.Provider value={info}>
            {children}
        </TeacherAuthContext.Provider>
    );
};

export default TeacherAuthProvider;