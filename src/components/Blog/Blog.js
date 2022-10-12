import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    <div className="overflow-hidden p-5 transition-shadow duration-300 bg-white rounded">
                        <a href="/" aria-label="Article">
                            <img
                                src="https://miro.medium.com/max/1200/1*HeUOgmhMg2bGqhTtbCju1w.png"
                                className="object-cover w-full h-64 rounded"
                                alt=""
                            />
                        </a>
                        <div className="py-5">
                            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                                13 Jul 2020
                            </p>
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-2xl font-bold leading-5">What is the use of React Router</p>
                            </a>
                            <p className="mb-4 text-gray-700">
                                React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="/"
                                    aria-label="Likes"
                                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                >
                                    <div className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                        >
                                            <polyline
                                                points="6 23 1 23 1 12 6 12"
                                                fill="none"
                                                strokeMiterlimit="10"
                                            />
                                            <path
                                                d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">7.4K</p>
                                </a>
                                <a
                                    href="/"
                                    aria-label="Comments"
                                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                >
                                    <div className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                        >
                                            <polyline
                                                points="23 5 23 18 19 18 19 22 13 18 12 18"
                                                fill="none"
                                                strokeMiterlimit="10"
                                            />
                                            <polygon
                                                points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">81</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden p-5 transition-shadow duration-300 bg-white rounded">
                        <a href="/" aria-label="Article">
                            <img
                                src="https://blog.hashinteractive.com/wp-content/uploads/2020/05/react-context-api.jpg"
                                className="object-cover w-full h-64 rounded"
                                alt=""
                            />
                        </a>
                        <div className="py-5">
                            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                                4 Nov 2020
                            </p>
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-2xl font-bold leading-5">How does React context API work?</p>
                            </a>
                            <p className="mb-4 text-gray-700">
                                The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="/"
                                    aria-label="Likes"
                                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                >
                                    <div className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                        >
                                            <polyline
                                                points="6 23 1 23 1 12 6 12"
                                                fill="none"
                                                strokeMiterlimit="10"
                                            />
                                            <path
                                                d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">7.4K</p>
                                </a>
                                <a
                                    href="/"
                                    aria-label="Comments"
                                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                >
                                    <div className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                        >
                                            <polyline
                                                points="23 5 23 18 19 18 19 22 13 18 12 18"
                                                fill="none"
                                                strokeMiterlimit="10"
                                            />
                                            <polygon
                                                points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">81</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden p-5 transition-shadow duration-300 bg-white rounded">
                        <a href="/" aria-label="Article">
                            <img
                                src="https://res.cloudinary.com/practicaldev/image/fetch/s--5u-MHaMy--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/l7ci1s4hjn2yrmovjh0s.png"
                                className="object-cover w-full h-64 rounded"
                                alt=""
                            />
                        </a>
                        <div className="py-5">
                            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                                28 Dec 2020
                            </p>
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-2xl font-bold leading-5">
                                    What is the use of useRef in React?
                                </p>
                            </a>
                            <p className="mb-4 text-gray-700">
                                The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="/"
                                    aria-label="Likes"
                                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                >
                                    <div className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                        >
                                            <polyline
                                                points="6 23 1 23 1 12 6 12"
                                                fill="none"
                                                strokeMiterlimit="10"
                                            />
                                            <path
                                                d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">7.4K</p>
                                </a>
                                <a
                                    href="/"
                                    aria-label="Comments"
                                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                >
                                    <div className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                        >
                                            <polyline
                                                points="23 5 23 18 19 18 19 22 13 18 12 18"
                                                fill="none"
                                                strokeMiterlimit="10"
                                            />
                                            <polygon
                                                points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">81</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;