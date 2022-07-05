import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../slices/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((data) => data.todos);

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  console.log({ todos });
  return (
    <>
      {todos.map((data) => (
        <div key={data.id}>
          <p>
            Task: {data.message}
            <button onClick={() => handleDeleteTodo(data.id)}>Delete</button>
          </p>
        </div>
      ))}
    </>
  );
};

export default TodoList;
