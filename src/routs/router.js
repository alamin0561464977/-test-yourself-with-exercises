import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Error404 from "../components/Error404";
import Home from "../components/Home/Home";
import Quiz from "../components/Quiz/Quiz";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
            }
        ]
    },
    {
        path: '*',
        element: <Error404></Error404>
    }
])