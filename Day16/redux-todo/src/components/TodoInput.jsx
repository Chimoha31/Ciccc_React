import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../slices/todoSlice';

const TodoInput = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const submitTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));

    setTodo("");
  }

  console.log(todo);

  return (
    <form onSubmit={submitTodoHandler}>
      <input type="text" placeholder="Enter todo here" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  )
}

export default TodoInput