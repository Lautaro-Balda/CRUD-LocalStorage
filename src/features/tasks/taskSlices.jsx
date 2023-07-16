import { createSlice } from "@reduxjs/toolkit";

const initialState = [
   {
      id: "1",
      title: "Task 1",
      description: "Task 1 description",
      completed: false
   },
   {
      id: "2",
      title: "Task 2",
      description: "Task 2 description",
      completed: false
   }
]
export const taskSlice = createSlice({
   name: 'Tasks',
   initialState,
   reducers: {
      addTask: (state, action) => {
         state.push(action.payload)
      },
      editTask: (state, action) => {
         const { id, title, description } = action.payload

         const FoundTask = state.find(task => task.id === id)

         if (FoundTask) {
            FoundTask.title = title
            FoundTask.description = description
         }
      },
      deleteTask: (state, action) => {
         const taskfound = state.find(task => task.id === action.payload)
         if (taskfound) {
            state.splice(state.indexOf(taskfound), 1)
         }
      }
   }
})

export const { addTask, deleteTask, editTask } = taskSlice.actions
export default taskSlice.reducer