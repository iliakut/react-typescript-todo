import {actionTypes, Ifilter} from "../constants/typesFilter";
import {FilterActionTypes} from "../actions/actionTypes";

const initialState: Ifilter = {
  filter: 'all'
};

export default (state = initialState, action: FilterActionTypes): Ifilter => {
  switch (action.type) {
    case actionTypes.SET_FILTER: {
      return {
        filter: action.payload,
      }
    }
    default:
      return state;
  }
}
