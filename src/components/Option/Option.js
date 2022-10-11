import React from 'react';

const Option = ({ option, btnOption }) => {
    return (
        <div onClick={() => btnOption(option)}>
            <div className="max-w-md sm:mx-auto sm:text-center bg-gray-500 p-5 rounded-md shadow-xl hover:bg-sky-200">
                <h6 className="mb-3 text-xl font-bold leading-5">{option}</h6>
            </div>
        </div>
    );
};

export default Option;