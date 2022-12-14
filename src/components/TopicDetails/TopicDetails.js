import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const TopicDetails = () => {
    const questions = useLoaderData().data.questions;

    return (
        <div>
            <div>
                {
                    questions.map(question => <Question
                        key={question.id}
                        questions={question}
                    ></Question>)
                }
            </div>
        </div>
    );
};

export default TopicDetails;