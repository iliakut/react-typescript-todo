import * as types from '../constants/typesTodo'

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
    case types.EDIT_LABEL_TODO_ITEM: {
      console.log(action.payload.id, action.payload.label)
    }
    default:
      return state;
  }
}
