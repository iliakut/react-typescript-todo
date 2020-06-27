import * as actionTypes from '../constants/actionTypesTodo';

export const onAddTodo = (todoItem: actionTypes.ItodoItem): actionTypes.types => ({
  type: actionTypes.ADD_TODO_ITEM,
  payload: todoItem
});