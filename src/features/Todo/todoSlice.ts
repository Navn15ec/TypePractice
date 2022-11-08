import { createSlice, PayloadAction  } from '@reduxjs/toolkit'


type TODO = {
    id : number
    task : string
}

type InitialState = {
    Todo : TODO[]
}
const initialState: InitialState = {
    Todo : []
}

const todoSlice = createSlice({
    name :"Todo", 
    initialState,
    reducers: {
        AddTodo :(state, action: PayloadAction<string>)=>{
            let index = state.Todo.length +1 ;
            let newValue = { id : index, task:action.payload};
            state.Todo.push(newValue)
        },
        EditTodo : (state, action)=>{
            let index = state.Todo.findIndex(task=>task.id===action.payload.id);
            state.Todo[index]= action.payload;
        },
        DeleteTodo : (state, action)=>{
            let index = state.Todo.findIndex(task=>task.id===action.payload)
            state.Todo.splice(index, 1)
        }
    }
})


export default todoSlice.reducer

export const { AddTodo, EditTodo, DeleteTodo} = todoSlice.actions