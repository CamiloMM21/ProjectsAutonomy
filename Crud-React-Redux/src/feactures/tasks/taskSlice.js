import { createSlice } from "@reduxjs/toolkit";


const initialState=[
    {
        id:1,
        title: "Task 1",
        description: "description 1",
        estado:false
    },
    {
        id:2,
        title: "Task 2",
        description: "description 2",
        estado: false
    }
]
export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{
        addTask: (state, action)=>{
            state.push(action.payload);
        },  
          EditTask:(state, action)=>{
            const {id, title, description}= action.payload

            const foundTask = state.find(task => task.id === id)
            if (foundTask){
                foundTask.title = title
                foundTask.description = description
            }
        },
        DeleteTask:(state, action)=>{
           const taskFound =state.find(task=> task.id === action.payload);
           if (taskFound){
            state.splice(state.indexOf(taskFound), 1)
           }
        }
    

    }

})
    


export const {addTask, DeleteTask, EditTask} = taskSlice.actions
export default taskSlice.reducer