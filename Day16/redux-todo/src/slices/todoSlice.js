import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Math.random(),
        message: action.payload
      })
    },
    deleteTodo: (state, action) => {
      const filterTodos = state.todos.filter((todo) => todo.id !== action.payload)
      return filterTodos
    }
  }
});

export const {addTodo, deleteTodo} = todoSlice.actions

export default todoSlice.reducer