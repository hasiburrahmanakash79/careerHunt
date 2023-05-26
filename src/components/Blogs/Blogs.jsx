import React, { useEffect, useState } from 'react';
import Question from './Question';

const Blogs = () => {
    const [questions, setQuestions] = useState([]);
    useEffect( ()=>{
        fetch('/question.json')
        .then( res => res.json())
        .then( data => setQuestions(data))
    },[])
    return (
        <div>
            <h1 className='my-10 font-bold text-4xl md:text-5xl title text-center underline'>Question & Answer</h1>
            <div className='md:grid grid-cols-2'>
                {
                    questions.map(question => <Question
                    key={question.id}
                    question={question}
                    ></Question>)
                }
            </div>
        </div>
    );
};

export default Blogs;