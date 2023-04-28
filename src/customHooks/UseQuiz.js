import React from 'react'
import { Dispatch } from '@reduxjs/toolkit'
import { setCount, getQuestions, checkMarks } from '../store/HomeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const UseQuiz = () => {
    const dispatch = useDispatch()
    const startQuiz = () => {
        dispatch(getQuestions())
    }
    const makeResult = (marks) => {
        dispatch(checkMarks(marks))
    }

    return {
        startQuiz,

        makeResult
    }

}

export default UseQuiz