import {configureStore} from '@reduxjs/toolkit';
import todoReducer from "../features/todo/todoSlice";

//use this store for state managements:
export const store= configureStore({
    reducer: todoReducer,
});

//add reducer to store