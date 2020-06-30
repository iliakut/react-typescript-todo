import * as typesTodo from '../constants/typesTodo';

export const onAddTodo = (todoItem: typesTodo.ItodoItem): typesTodo.types => ({
  type: typesTodo.ADD_TODO_ITEM,
  payload: todoItem
});

export const onEditLabelTodo = (id: number, label: string): typesTodo.types => ({
  type: typesTodo.EDIT_LABEL_TODO_ITEM,
  payload: {
    id,
    label
  }
});

export const setCompletedTodoItem = (id: number, completed: boolean): typesTodo.types => ({
  type: typesTodo.SET_COMPLETED_TODO_ITEM,
  payload: {
    id,
    completed
  }
});

export const onDeleteTodoItem = (id: number):   typesTodo.types => ({
  type: typesTodo.DELETE_TODO_ITEM,
  payload: {
    id
  }
});