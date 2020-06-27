// actionTypes
export const ADD_TODO_ITEM: string = 'ADD_TODO_ITEM';

// action interfaces
interface IonAddTodo {
  type: typeof ADD_TODO_ITEM,
  payload: ItodoItem
}
export type types = IonAddTodo;

// state types
export interface ItodoItem {
  id: number,
  label: string
}

export interface Itodo {
  todos: ItodoItem[],
}