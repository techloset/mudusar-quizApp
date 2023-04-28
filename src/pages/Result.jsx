import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const Result = () => {
    const { questions, status, marks } = useSelector((Store) => Store.HomeSlice)
    console.log(marks / questions.length * 100, 'percentage');
    const navigate = useNavigate()
    const [result, setResult] = useState('fail');
    useEffect(() => {
        if (questions.length !== 0) {
            if (marks / questions.length * 100 > 33) {
                setResult('pass');
            } else {
                setResult('fail');
            }
        }
    }, []);
    let bgColor = result === "fail" ? "bg-red-100" : "bg-green-100";
    let borderColor = result === "fail" ? "border-red-400" : "border-green-400";
    let textColor = result === "fail" ? "text-red-700" : "text-green-700";
    let message = result === "fail" ? "Sorry, Try Next Time..." : `Congratulations, you passed! With ${marks} Marks out of ${questions.length}`;
    return (
        <>
            <div className={`border ${borderColor} ${bgColor} text-center px-4 py-9  rounded relative`} role="alert">
                {questions.length === 0 ? <h1 className='text-xl font-semibold'>Plz Submit a Test!</h1> :
                    <div>
                        <strong className={`font-bold text-xl ${textColor}`}>{message}</strong>
                        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                        </span>
                        <div className='flex justify-center mt-6'>
                            <button onClick={() => { navigate('/') }} className="bg-green-300 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-400">Restart</button>

                        </div>
                    </div>
                }
            </div>

        </>
    );
}



export default Result