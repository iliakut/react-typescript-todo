import * as typesTodo from '../constants/typesTodo';

function getLiteral<T extends string>(arg: T): T {
  /*
  * сделает преборазование type в литеральный тип
  * для дальнейшего соответствия payload и type в reducer
  */
  return arg
}

export const onAddTodo = (todoItem: typesTodo.ItodoItem) => ({
  type: getLiteral(typesTodo.ADD_TODO_ITEM),
  payload: todoItem
});

export const onEditLabelTodo = (id: number, label: string) => ({
  type: getLiteral(typesTodo.EDIT_LABEL_TODO_ITEM),
  payload: {
    id,
    label
  }
});

export const setCompletedTodoItem = (id: number, completed: boolean) => ({
  type: getLiteral(typesTodo.SET_COMPLETED_TODO_ITEM),
  payload: {
    id,
    completed,
  }
});

export const onDeleteTodoItem = (id: number) => ({
  type: getLiteral(typesTodo.DELETE_TODO_ITEM),
  payload: {
    id
  }
});

export type actionTypes =
  ReturnType<typeof onAddTodo> |
  ReturnType<typeof onEditLabelTodo> |
  ReturnType<typeof setCompletedTodoItem> |
  ReturnType<typeof onDeleteTodoItem>