import * as actionTypes from '../constants/actionTypesTodo'

const initialState: actionTypes.Itodo = {
  todos: [],
};

export default (state = initialState, action: actionTypes.types) => {
  switch (action.type) {
    case actionTypes.ADD_TODO_ITEM: {
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    }
    default:
      return state;
  }
}