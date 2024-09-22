import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './slice/tasksSlice'
const store = configureStore({
    reducer: {
        tasks: taskReducer
    }
})

export default store;