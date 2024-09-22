import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    tasksList: [],
    selectedList: {}
}

const tasksSlice = createSlice({
    name: 'tasksSlice',
    initialState,
    reducers: {
        addTaskToList: (state, action) => {
            const id = nanoid();
            let task = { ...action.payload, id };  /* action consists of payload and type. Using Object spreading */
            state.tasksList.push(task);
        },
        removefromList: (state, action) => {
            state.tasksList = state.tasksList.filter((task) => {
                return task.id !== action.payload.id;
            })
        },
        updateTaskInList: (state, action) => {
            state.tasksList = state.tasksList.map((task) => {
                if (task.id === action.payload.id) {
                    return action.payload;
                }
                else {
                    return task;
                }
            })
        },
        setSelectedTask: (state, action) => {
            state.selectedList = action.payload;
        }
    }
})

export const { addTaskToList, removefromList, updateTaskInList, setSelectedTask } = tasksSlice.actions

export default tasksSlice.reducer;