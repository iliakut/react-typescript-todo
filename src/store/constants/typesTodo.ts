// actionTypes
export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const EDIT_LABEL_TODO_ITEM = 'EDIT_LABEL_TODO_ITEM';
export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';
export const SET_COMPLETED_TODO_ITEM = 'SET_COMPLETED_TODO_ITEM';

// state types
export interface ItodoItem {
  id: number,
  label: string,
  completed: boolean
}

export interface Itodos {
  todos: ItodoItem[],
}