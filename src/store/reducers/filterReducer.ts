import {actionTypes, Ifilter, IsetFilter} from "../constants/typesFilter";

const initialState: Ifilter = {
  filter: 'all'
};

export default (state = initialState, action: IsetFilter): Ifilter => {
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
