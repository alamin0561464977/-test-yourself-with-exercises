import React from 'react';

const Option = ({ option, btnOption }) => {
    return (
        <div onClick={() => btnOption(option)}>
            <div className="max-w-md sm:mx-auto sm:text-center bg-gray-500 p-5 rounded-md shadow-xl">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                    <svg
                        className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                    >
                        <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                    </svg>
                </div>
                <h6 className="mb-3 text-xl font-bold leading-5">{option}</h6>
            </div>
        </div>
    );
};

export default Option;