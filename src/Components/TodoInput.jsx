import React, { useState } from "react";
import TodoList from "./TodoList";
import { useDispatch } from "react-redux";
import { addTodosAPI, getTodosAPI } from "../Store/Todos/todos.action";

const TodoInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    let payload = {
      id: Date.now(),
      title: value,
      status: false,
    };
    dispatch(addTodosAPI(payload)).then((res) => {
      dispatch(getTodosAPI());
    });
    setValue("");
  };
  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>ADD</button>
      <TodoList value={value}></TodoList>
    </div>
  );
};

export default TodoInput;
