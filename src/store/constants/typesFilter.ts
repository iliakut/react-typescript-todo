export const actionTypes = {
  SET_FILTER: 'SET_FILTER'
};

export type FilterTypes = 'all' | 'active' | 'completed';

export interface Ifilter {
  filter: FilterTypes
}