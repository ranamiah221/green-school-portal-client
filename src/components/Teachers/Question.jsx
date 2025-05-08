import React from 'react';

const Question = ({ question , idx}) => {
    const options = question.options;
    return (
        <div className='mb-5 bg-amber-50 px-2 rounded-lg py-3'>
            <p className='text-base font-medium'>{idx + 1}.{question.question}</p>
            {
                options?.map(option => <div className='flex justify-start gap-1 items-center'>
                    <input type="radio" name="" id="" /><li className='list-none'>{option}</li>
                </div>)
            }
        </div>
    );
};

export default Question;