import axios from "axios";
import * as types from "./todos.actionTypes";

export const getTodosAPI = () => (dispatch) => {
  return axios.get("http://localhost:8080/todos").then((res) => {
    dispatch({ type: types.GET_TODOS_SUCCESS, payload: res.data });
  });
};

export const addTodosAPI = (todo) => (dispatch) => {
  return axios.post("http://localhost:8080/todos", todo);
};

export const toggleTodosAPI = (todo) => (dispatch) => {
  return axios.patch(`http://localhost:8080/todos/${todo.id}`, {
    status: !todo.status,
  });
};

export const removeTodosAPI = (id) => (dispatch) => {
  return axios.delete(`http://localhost:8080/todos/${id}`);
};

export const editTodosAPI = (id, todo) => () => {
  return axios.put(`http://localhost:8080/todos/${id}`, todo);
};
