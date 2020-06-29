import * as types from '../constants/typesTodo'
import {ItodoItem} from "../constants/typesTodo";

const initialState: types.Itodo = {
  todos: [],
};

export default (state = initialState, action: types.types): types.Itodo => {
  switch (action.type) {
    case types.ADD_TODO_ITEM: {
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    }
    case types.EDIT_LABEL_TODO_ITEM: {
      const index = findIndex(action.payload.id, state.todos);
      if (index >= 0) {
        const item = state.todos[index];
        const newItem = {...item};
        newItem.label = action.payload.label;
        const newTodos = [...state.todos];
        newTodos[index] = newItem;
        return {
          ...state,
          todos: newTodos
        }
      }
      return state;
    }
    case types.DELETE_TODO_ITEM: {
      const index = findIndex(action.payload.id, state.todos);
      const newTodos = [...state.todos];
      newTodos.splice(index, 1);
      if (index >= 0) {
        return {
          ...state,
          todos: newTodos
        }
      }
      return state;
    }
    case types.SET_COMPLETED_TODO_ITEM: {
      const index = findIndex(action.payload.id, state.todos);
      if (index >= 0) {
        const item = state.todos[index];
        const newItem = {...item};
        newItem.completed = action.payload.completed;
        const newTodos = [...state.todos];
        newTodos[index] = newItem;
        return {
          ...state,
          todos: newTodos
        }
      }
      return state;
    }
    default:
      return state;
  }
}

const findIndex = (id: number, arr: ItodoItem[]) => {
  return arr.findIndex(item => item.id === id);
};