import React, { useContext } from 'react';
import { QuizContext } from '../../layout/Main';

const Quiz = () => {
    const quiz = useContext(QuizContext);
    return (
        <div>
            Quiz {quiz.length}
        </div>
    );
};

export default Quiz;