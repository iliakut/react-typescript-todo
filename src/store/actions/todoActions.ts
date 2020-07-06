import * as typesTodo from '../constants/typesTodo';
import {AppThunk} from "./thunkActionType";

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

export const onAddTestName = (name: string) => ({
  type: typesTodo.TEST_ASYNC,
  payload: {
    name
  }
} as const);

export const actions = {
  onAddTodo,
  onEditLabelTodo,
  onDeleteTodoItem,
  setCompletedTodoItem,
  onRemoveCompleted,
  onAddTestName
};

// export type actionTypes =
//   ReturnType<typeof onAddTodo> |
//   ReturnType<typeof onEditLabelTodo> |
//   ReturnType<typeof setCompletedTodoItem> |
//   ReturnType<typeof onDeleteTodoItem>




/*
* пример асинхронного запроса
*/

// интерфейс HTTP запроса
interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

// интерфейс получаемой сущности
interface Data {
  name: string;
}

// функция обертка для запросов
async function Api<T>(
  request: RequestInfo
): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(request);
  response.parsedBody = await response.json();
  return response;
}

export const testAsync = (id : number): AppThunk => async (dispatch) => {
  // dispatch(fetchAsyncError(false));
  // dispatch(fetchAsyncLoading(true));
  try {
    const response = await Api<Data>(`https://swapi.dev/api/planets/${id}`);
    const name = response.parsedBody?.name ?? '';
    dispatch(onAddTestName(name));
  }
  catch (e) {
    dispatch(onAddTestName('error getting name'));
    // dispatch(fetchAsyncError(true))
  }
  // dispatch(fetchAsyncLoading(false));
};

