import React from 'react';

const Question = ({question}) => {
    const {questions, ans} = question;
    return (
        <div className='bg-indigo-50 mb-6 p-10 rounded-lg hover:bg-indigo-100 mx-3'>
            <h1 className='font-bold text-xl mb-3'>Q. {questions}</h1>
            <p> <span className='font-bold'>Answer</span> {ans}</p>
        </div>
    );
};

export default Question;