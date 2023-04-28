import React, { useState } from 'react'
import { Dispatch } from '@reduxjs/toolkit'
import { setlimitations, getQuestions } from '../store/HomeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const UseHome = () => {
    const status = useSelector((Store) => Store.HomeSlice.status)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const setLimits = (limit, category) => {
        dispatch(setlimitations({ limit, category }))
        navigate('/quiz')
    }
    const checkResult = () => {
        navigate('/result')
    }
    return {
        setLimits,
        checkResult
    }
}
export default UseHome