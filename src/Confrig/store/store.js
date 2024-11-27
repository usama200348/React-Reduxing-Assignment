import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from '../reducers/todoSlice'

export const store=configureStore({
    reducer:{
        todo:TodoReducer
    }
})