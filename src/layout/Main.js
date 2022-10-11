import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from '../components/Header/Header';

export const QuizContext = createContext([]);

const Main = () => {
    const quiz = useLoaderData().data;
    return (
        <div className='container mx-auto'>
            <QuizContext.Provider value={quiz}>
                <Header></Header>
                <ToastContainer />
                <Outlet></Outlet>
            </QuizContext.Provider>
        </div>
    );
};

export default Main;