import React, { useContext, useState } from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { QuizContext } from '../../layout/Main';

const Chart = () => {
    const data = useContext(QuizContext);
    console.log(data)
    return (
        <div className=' text-white my-8'>
            <LineChart className=' mx-auto' width={600} height={300} data={data}>
                <Line type="monotone" dataKey='total' stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Chart;