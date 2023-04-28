import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../config/axios-config";

export const STATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
})
const HomeSlice = createSlice({
    name: 'HomeSlice',
    initialState: { limit: 0, category: '', questions: [], status: 'loading', marks: 0 },
    reducers: {

        setlimitations(state, action) {
            state.limit = action.payload.limit
            state.category = action.payload.category
        },
        checkMarks(state, action) {
            state.marks = action.payload
            console.log(state.marks, action.payload, 'slice ma se marks chekc ')
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getQuestions.pending, (state, action) => {
                state.status = STATUS.LOADING
            })
            .addCase(getQuestions.fulfilled, (state, action) => {
                if (state.questions.length === 0) {
                    state.questions = action.payload
                }
                state.status = STATUS.IDLE
            })
            .addCase(getQuestions.rejected, (state, action) => {
                state.status = STATUS.ERROR
            })
    }
})
export const { setlimitations, checkMarks } = HomeSlice.actions
export default HomeSlice.reducer
export const getQuestions = createAsyncThunk('get/Questions', async (dispatch, { getState }) => {
    const limit = getState().HomeSlice.limit;
    const category = getState().HomeSlice.category;
    const res = await baseURL.get(`/v1/questions?apiKey=1HQZlIgnEwr4U0AmrEJunTl1eSKqL8QfbcWCysUv & limit=${limit} & category=${category ? category : ''}`)
    const data = res.data
    return data
})