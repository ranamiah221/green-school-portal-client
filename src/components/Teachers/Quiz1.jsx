// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const Quiz1 = () => {
//     const [questions, setQuestions] = useState([]);
//       const Quiz1 = questions.filter(question => question.quiz == 1)
//      useEffect(() => {
//         axios.get('http://localhost:8000/questions')
//             .then(res => {
//                 setQuestions(res.data)
//             })
//             .catch(error => {
//                 console.log(error.message);
//             })
//     }, [])
//     return (
//         <div>
//             {
//                 Quiz1?.map((question, idx)=> <Question question={question} idx={idx}></Question>)
//             }
//         </div>
//     );
// };

// export default Quiz1;