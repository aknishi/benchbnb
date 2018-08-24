import { UPDATE_FILTER } from '../actions/filter_actions';
import { merge } from 'lodash/merge';

const filtersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case UPDATE_FILTER:
      const newFilter = {[action.filter]: action.value}
      return newFilter;
    default:
      return state;
  }
}

export default filtersReducer;
