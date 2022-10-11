import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Error404 from "../components/Error404";
import Home from "../components/Home/Home";
import Quiz from "../components/Quiz/Quiz";
import TopicDetails from "../components/TopicDetails/TopicDetails";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/quiz',
                element: <Quiz></Quiz>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: 'quiz/:quizId',
                element: <TopicDetails></TopicDetails>,
                loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
            }
        ]
    },
    {
        path: '*',
        element: <Error404></Error404>
    }
])