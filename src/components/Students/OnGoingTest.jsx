import { useContext, useEffect, useState } from "react";
import StudentAuthContext from "../StudentContext/StudentAuthContext";
import axios from "axios";
import Question from "../Teachers/Question";


const OnGoingTest = () => {
    const {student}=useContext(StudentAuthContext)
    const [questions, setQuestions]=useState([]);
    const myQuestions = questions.filter(question=> question.classes == student.classes)
    console.log(myQuestions);

    useEffect(()=>{
        axios.get(`http://localhost:8000/questions`)
        .then(res=>{
            setQuestions(res.data)
        })
    },[])

   
    
    return (
        <div>
            {
                myQuestions.map((question, idx)=> <Question key={question._id} question={question} idx={idx}></Question>)
            }
           
        </div>
    );
};

export default OnGoingTest;