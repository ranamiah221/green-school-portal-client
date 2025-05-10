import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Question from './Question';
import TeacherAuthContext from '../../TeacherContext/TeacherAuthContext';
import { Link } from 'react-router-dom';

const Tests = () => {
    const [questions, setQuestions] = useState([]);
    const { teacher } = useContext(TeacherAuthContext)
    const Quiz1 = questions.filter(question => question.quiz == 1)
    const Quiz2 = questions.filter(question => question.quiz == 2)
    const Quiz3 = questions.filter(question => question.quiz == 3)
  

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
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Quiz</th>
                            <th>Number of Qustions</th>
                            <th>Teacher</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>

                            <td>Quiz- 1</td>
                            <td>{Quiz1.length}</td>
                            <td>{teacher.firstName} {teacher.lastName}</td>
                            <td><Link to={'1'}>view</Link></td>
                            
                        </tr>
                        <tr>

                            <td>Quiz- 2</td>
                            <td>{Quiz2.length}</td>
                            <td>{teacher.firstName} {teacher.lastName}</td>
                            <td><Link to={`2`}>view</Link></td>
                        </tr>
                        <tr>

                            <td>Quiz- 3</td>
                            <td>{Quiz3.length}</td>
                            <td>{teacher.firstName} {teacher.lastName}</td>
                            <td><Link to={`3`}>view</Link></td>
                        </tr>


                    </tbody>
                </table>
            </div>



            
        </div>
    );
};

export default Tests;