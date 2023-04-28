import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "./HomeSlice";
const Store = configureStore({
    reducer: {
        HomeSlice,
    }


})
export default Store