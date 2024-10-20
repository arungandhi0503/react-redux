import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    tasksList: [],
    selectedTask: {},
    isLoading: false,
    error: ''
}

export const getTaskFromServer = createAsyncThunk(
    "tasks/getTaskFromServer",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('http://localhost:8000/taskss');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            return result;
        }
        catch (e) {
            return rejectWithValue({ error: "No Tasks Found" });
        }
    }
)

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
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTaskFromServer.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTaskFromServer.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = '';
                state.tasksList = action.payload;
            })
            .addCase(getTaskFromServer.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
                state.tasksList = [];
            })
    }
})

export const { addTaskToList, removefromList, updateTaskInList, setSelectedTask } = tasksSlice.actions

export default tasksSlice.reducer;