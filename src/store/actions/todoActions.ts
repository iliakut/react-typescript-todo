import * as typesTodo from '../constants/typesTodo';

export const onAddTodo = (todoItem: typesTodo.ItodoItem) => ({
  type: typesTodo.ADD_TODO_ITEM,
  payload: todoItem
});

export const onEditLabelTodo = (id: number, label: string) => ({
  type: typesTodo.EDIT_LABEL_TODO_ITEM,
  payload: {
    id,
    label
  }
});

export const setCompletedTodoItem = (id: number, completed: boolean) => ({
  type: typesTodo.SET_COMPLETED_TODO_ITEM,
  payload: {
    id,
    completed
  }
});

export const onDeleteTodoItem = (id: number) => ({
  type: typesTodo.DELETE_TODO_ITEM,
  payload: {
    id
  }
});

export type actionTypes =
  ReturnType<typeof onAddTodo> |
  ReturnType<typeof onEditLabelTodo> |
  ReturnType<typeof setCompletedTodoItem> |
  ReturnType<typeof onDeleteTodoItem>