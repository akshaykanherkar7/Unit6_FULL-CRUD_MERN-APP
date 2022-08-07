import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editTodosAPI,
  getTodosAPI,
  removeTodosAPI,
  toggleTodosAPI,
} from "../Store/Todos/todos.action";

const TodoList = ({ value }) => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);
  console.log("todos:", todos);

  useEffect(() => {
    dispatch(getTodosAPI());
  }, [dispatch]);

  const handleToggleTodo = (todo) => {
    dispatch(toggleTodosAPI(todo)).then((res) => {
      dispatch(getTodosAPI());
    });
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodosAPI(id)).then((res) => {
      dispatch(getTodosAPI());
    });
  };

  const handleEditTodo = (todo) => {
    const id = todo.id;
    todo.title = value;
    dispatch(editTodosAPI(id, todo)).then((res) => {
      dispatch(getTodosAPI());
    });
  };
  return (
    <div>
      {todos.length > 0 &&
        todos.map((todo) => (
          <div key={todo.id}>
            <div>{todo.title}</div>
            <div>{todo.status ? "Completed" : "notCompleted"}</div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                width: "fit-content",
                margin: "auto",
                marginTop: "10px",
              }}
            >
              <button onClick={() => handleToggleTodo(todo)}>Toggle</button>
              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
              <button onClick={() => handleEditTodo(todo)}>Edit</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TodoList;
