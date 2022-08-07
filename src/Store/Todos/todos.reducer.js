import * as types from "./todos.actionTypes";

const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_TODOS_SUCCESS: {
      return { ...state, todos: payload };
    }

    default: {
      return state;
    }
  }
};
