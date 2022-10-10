import React, { useContext } from 'react';
import { QuizContext } from '../../layout/Main';
import QuizCard from '../QuizCard/QuizCard';

const Quiz = () => {
    const quiz = useContext(QuizContext);
    return (
        <div className='m-14'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {
                    quiz.map(quiz => <QuizCard
                        key={quiz.id}
                        quiz={quiz}
                    ></QuizCard>)
                }
            </div>
        </div>
    );
};

export default Quiz;