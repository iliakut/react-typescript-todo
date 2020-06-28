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