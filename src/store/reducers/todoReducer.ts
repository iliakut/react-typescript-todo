import * as constTypes from "../constants/typesTodo";
import {TodoActionTypes} from "../actions/actionTypes";
import {ItodoItem, Itodos} from "../constants/typesTodo";


const initialState: Itodos = {
  todos: [],
};
// TODO разобраться с any
export default (state = initialState, action: any): Itodos => {
  switch (action.type) {

    case constTypes.ADD_TODO_ITEM: {
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    }

    case constTypes.EDIT_LABEL_TODO_ITEM: {
      const index = findIndex(action.payload.id, state.todos);
      if (index >= 0) {
        const newTodos = changeArrElementParamByIndex(
          index,
          state.todos,
          'label',
          action.payload.label
        );

        return {
          ...state,
          todos: newTodos
        }
      }
      return state;
    }

    case constTypes.DELETE_TODO_ITEM: {
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

    case constTypes.SET_COMPLETED_TODO_ITEM: {
      const index = findIndex(action.payload.id, state.todos);
      if (index >= 0) {
        const item = state.todos[index];
        const newItem = {...item};
        newItem.completed = action.payload.completed;
        const newTodos = [...state.todos];
        newTodos[index] = newItem;
        return {
          ...state,
          todos: changeArrElementParamByIndex(
            index,
            state.todos,
            'completed',
            action.payload.completed
          )
        }
      }
      return state;
    }

    case constTypes.REMOVE_COMPLETED: {
      return {
        ...state,
        todos: state.todos.filter(item => !item.completed)
      }
    }

    default:
      return state;
  }
}

const findIndex = (id: number, arr: ItodoItem[]): number => {
  return arr.findIndex(item => item.id === id);
};

const changeArrElementParamByIndex = (
    index: number,
    arr: ItodoItem[],
    paramName: 'completed' | 'label',
    newParamValue: boolean | string,
  ): ItodoItem[] => {
    const item = arr[index];
    const newItem = {
      ...item,
      [paramName]: newParamValue
    };
    const newTodos = [...arr];
    newTodos[index] = newItem;
    return newTodos;
  };
