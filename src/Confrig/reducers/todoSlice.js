import { createSlice, nanoid } from "@reduxjs/toolkit";

const todo=createSlice({
    name:"Todo",
    initialState:{
        todos:[
            {
                title:`Hello World`,
                id:nanoid()
            }
    

    ]},

    reducers:{
        addTodo:(state,action)=>{
            state.todos.push({
                title:action.payload.title,
                id:nanoid()
            })
        }
    },
    removeTodo:(state,action)=>{
        state.todo.splice(action.payload.index,1);
    },
    editTodo: (state, action) => {
        const { id, newTitle } = action.payload;
        const todo = state.todos.find((todo) => todo.id === id);
        if (todo) {
            todo.title = newTitle;
        }
    },
})


export const{addTodo,removeTodo}=todo.actions
export default todo.reducer

