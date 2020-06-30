import {actionTypes, FilterTypes} from "../constants/typesFilter";

export const onSetFilter = (filter: FilterTypes) => ({
  type: actionTypes.SET_FILTER,
  payload: filter
});