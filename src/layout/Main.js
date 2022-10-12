import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export const QuizContext = createContext([]);

const Main = () => {
    const quiz = useLoaderData().data;
    return (
        <div className='container mx-auto border-x-2'>
            <QuizContext.Provider value={quiz}>
                <Header></Header>
                <ToastContainer />
                <Outlet></Outlet>
                <Footer></Footer>
            </QuizContext.Provider>
        </div>
    );
};

export default Main;