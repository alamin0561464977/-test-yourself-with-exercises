import React from 'react';
import { Link } from 'react-router-dom';

const QuizCard = ({ quiz }) => {
    const { id, name, logo } = quiz;
    console.log(quiz)
    return (
        <div className=' text-black'>
            <div className="card card-compact w-auto bg-slate-300 shadow-xl">
                <img className='h-80' src={logo} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link to={`${id}`}>
                            <button className="btn btn-primary">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizCard;