import * as types from '../constants/actionTypesTodo'

const initialState: types.Itodo = {
  todos: [],
};

export default (state = initialState, action: types.types): types.Itodo => {
  switch (action.type) {
    case types.ADD_TODO_ITEM: {
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    }
    default:
      return state;
  }
}
