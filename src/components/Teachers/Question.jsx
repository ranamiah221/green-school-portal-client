import React, { useEffect, useState } from 'react';

const Question = ({ question, idx }) => {
    const [input, setInput] = useState('')
    const handleSubmit=(input)=>{
     console.log('clicked', input)
    }


    const options = question.options;
    return (
        <div className='mb-5 bg-amber-50 px-2 rounded-lg py-3'>
            <p className='text-base font-medium'>{idx + 1}.{question.question}</p>
            {
                options?.map(option => <div className='flex justify-start gap-1 items-center'>
                    <input type="radio" name='answer' value={(e) => setInput(e.target.value)} id="" /><li className='list-none'>{option}</li>
                </div>
                 )
            }
             <button onClick={()=>handleSubmit()}  className="btn btn-sm btn-accent bg-purple-800 text-white">Submit</button>
        </div>
    );
};

export default Question;