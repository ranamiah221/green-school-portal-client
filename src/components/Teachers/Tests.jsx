import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Question from './Question';

const Tests = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/questions')
            .then(res => {
                setQuestions(res.data)
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [])

    return (
        <div>
            {
                questions?.map((question, idx)=> <Question question={question} idx={idx}></Question>)
            }
        </div>
    );
};

export default Tests;