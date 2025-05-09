import { useState } from "react";
import axios from "axios";
import StudentAuthContext from "./StudentAuthContext";

const StudentAuthProvider = ({ children }) => {
    const [student, setStudent]=useState(null);
    const [loading, setLoading]=useState(true);

    const signInStudent=(phone,classes,name)=>{
        axios.get(`http://localhost:8000/students/${phone}`)
        .then(res=>{
            setLoading(true)
            setStudent(res.data)
        })
    }

    const info = {
        student, 
        signInStudent,
        loading
    }
  
    return (
        <StudentAuthContext.Provider value={info}>
            {
                children
            }
        </StudentAuthContext.Provider>
    );
};

export default StudentAuthProvider;