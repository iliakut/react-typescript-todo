export const actionTypes = {
  SET_FILTER: 'SET_FILTER'
};

export type FilterTypes = 'all' | 'active' | 'completed';

export interface IsetFilter {
  type: typeof actionTypes.SET_FILTER,
  payload: FilterTypes
}

export interface Ifilter {
  filter: FilterTypes
}