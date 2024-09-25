import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    tasksList: [],
    selectedTask: {}
}

const tasksSlice = createSlice({
    name: 'tasksSlice',
    initialState,
    reducers: {
        addTaskToList: (state, action) => {
            console.log("Action: ", action);
            const id = nanoid();
            let task = { ...action.payload, id };  /* action consists of payload and type. Using Object spreading */
            console.log(task);
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
            state.selectedTask = action.payload;
        }
    }
})

export const { addTaskToList, removefromList, updateTaskInList, setSelectedTask } = tasksSlice.actions

export default tasksSlice.reducer;