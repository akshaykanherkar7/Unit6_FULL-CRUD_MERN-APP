import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { studentReducer } from "./Students/students.reducer";
import { todoReducer } from "./Todos/todos.reducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  std: studentReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
