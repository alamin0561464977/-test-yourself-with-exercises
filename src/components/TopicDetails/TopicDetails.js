import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TopicDetails = () => {
    const quizDetails = useLoaderData().data;
    console.log(quizDetails)
    return (
        <div>
            TopicDetails
        </div>
    );
};

export default TopicDetails;