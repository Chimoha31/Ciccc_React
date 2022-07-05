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
    <div style={{marginTop: "10px"}}>
      {todos.map((data) => (
        <div key={data.id} style={{border: "1px solid #ccc", borderRadius: "10px", padding: "0px 10px", marginTop: "5px", width: "350px"}}>
          <p>
            Task: {data.message}
            <button onClick={() => handleDeleteTodo(data.id)} style={{marginLeft: "5px"}}>Delete</button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
