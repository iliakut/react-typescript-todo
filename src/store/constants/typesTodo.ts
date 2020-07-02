// actionTypes
export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const EDIT_LABEL_TODO_ITEM = 'EDIT_LABEL_TODO_ITEM';
export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';
export const SET_COMPLETED_TODO_ITEM = 'SET_COMPLETED_TODO_ITEM';

// action interfaces
interface IonAddTodo {
  type: typeof ADD_TODO_ITEM,
  payload: ItodoItem
}
interface IonEditLabelTodo {
  type: typeof EDIT_LABEL_TODO_ITEM,
  payload: {
    id: number,
    label: string
  }
}
interface IdeleteTodoItem {
  type: typeof DELETE_TODO_ITEM,
  payload: number
}
interface IsetCompletedTodoItem {
  type: typeof SET_COMPLETED_TODO_ITEM,
  payload: {
    id: number,
    completed: boolean
  }
}
export type types = IonAddTodo | IonEditLabelTodo | IdeleteTodoItem | IsetCompletedTodoItem;

// state types
export interface ItodoItem {
  id: number,
  label: string,
  completed: boolean
}

export interface Itodos {
  todos: ItodoItem[],
}