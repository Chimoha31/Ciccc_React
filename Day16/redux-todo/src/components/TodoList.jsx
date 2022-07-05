import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
  // const dispatch = useDispatch();
  const { todos } = useSelector((data) => data.todos);

  console.log({ todos });

  const handleDeleteTodo = () => {
    
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>
            Task: {todo.message} 
            <button onClick={handleDeleteTodo}>Delete</button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
