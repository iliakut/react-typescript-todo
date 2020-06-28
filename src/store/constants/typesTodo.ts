// actionTypes
export const ADD_TODO_ITEM: string = 'ADD_TODO_ITEM';
export const EDIT_LABEL_TODO_ITEM: string = 'EDIT_LABEL_TODO_ITEM';

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
  },
}
export type types = IonAddTodo | IonEditLabelTodo;

// state types
export interface ItodoItem {
  id: number,
  label: string
}

export interface Itodo {
  todos: ItodoItem[],
}