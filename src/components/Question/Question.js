import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Option from '../Option/Option';
import "react-toastify/dist/ReactToastify.css";

const Question = ({ questions }) => {
    const [correctAnswers, setCorrectAnswers] = useState(localStorage.getItem('correctAnswers') ? localStorage.getItem('correctAnswers') : 0);
    const [unCorrectAnswers, setAnCorrectAnswers] = useState(localStorage.getItem('anCorrectAnswers') ? localStorage.getItem('anCorrectAnswers') : 0);
    const { question, options, correctAnswer } = questions;
    const btnOption = option => {
        if (option === correctAnswer) {
            setCorrectAnswers(+correctAnswers + 1);
            toast.success("Default Notification !");
        }
        else {
            setAnCorrectAnswers(+unCorrectAnswers + 1);
            toast.warn("Warning Notification !")
        }
    }
    localStorage.setItem("anCorrectAnswers", unCorrectAnswers);
    localStorage.setItem("correctAnswers", correctAnswers);
    return (
        <div className='container mx-auto'>
            <div className='p-8 bg-gray-300 mt-8 grid grid-cols-2 text-center font-extrabold'>
                <h1 className='text-xl'>Correct Answers: {correctAnswers}</h1>
                <h1 className='text-xl'>Un Correct Answers: {unCorrectAnswers}</h1>
            </div>
            <div className="px-4 bg-slate-400 text-slate-800 m-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Brand new Question
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                        </span>{' '}
                        {question}
                    </h2>
                </div>
                <hr />
                <br />
                <div className="grid gap-8 row-gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {
                        options.map(option => <Option
                            key={option}
                            option={option}
                            btnOption={btnOption}
                        ></Option>)
                    }
                </div>
            </div>
        </div>
    );
};
export default Question;