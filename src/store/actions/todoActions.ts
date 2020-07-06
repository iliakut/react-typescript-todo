import * as typesTodo from '../constants/typesTodo';
import {AppThunk} from "./thunkActionType";

type typesTodo = typeof typesTodo;

function getLiteral<T extends string>(arg: T): T {
  /*
  * сделает преборазование type в литеральный тип
  * для дальнейшего соответствия payload и type в reducer
  * это 1-й вариант
  */
  return arg
}

export const onAddTodo = (todoItem: typesTodo.ItodoItem) => ({
  type: typesTodo.ADD_TODO_ITEM,
  payload: todoItem
} as const);

export const onEditLabelTodo = (id: number, label: string) => ({
  type: typesTodo.EDIT_LABEL_TODO_ITEM,
  payload: {
    id,
    label
  }
} as const);
/*
* as const -   сделает преборазование type в литеральный тип
* для дальнейшего соответствия payload и type в reducer
* это 2-1 вариант
*/

export const setCompletedTodoItem = (id: number, completed: boolean) => ({
  type: typesTodo.SET_COMPLETED_TODO_ITEM,
  payload: {
    id,
    completed,
  }
} as const);

export const onDeleteTodoItem = (id: number) => ({
  type: typesTodo.DELETE_TODO_ITEM,
  payload: {
    id
  }
} as const);

export const onRemoveCompleted = () => ({
  type: typesTodo.REMOVE_COMPLETED,
} as const);

export const onRemoveCompletedThunk = (timeout: number): AppThunk =>
  (dispatch) => {
    setTimeout(() => dispatch(onRemoveCompleted()), timeout);
  };

export const actions = {
  onAddTodo,
  onEditLabelTodo,
  onDeleteTodoItem,
  setCompletedTodoItem,
  onRemoveCompleted
};

// export type actionTypes =
//   ReturnType<typeof onAddTodo> |
//   ReturnType<typeof onEditLabelTodo> |
//   ReturnType<typeof setCompletedTodoItem> |
//   ReturnType<typeof onDeleteTodoItem>