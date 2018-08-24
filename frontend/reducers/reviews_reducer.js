import { RECEIVE_BENCH, RECEIVE_REVIEW } from '../actions/bench_actions';
import merge from 'lodash/merge';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BENCH:
      return merge({}, state, action.reviews);
    case RECEIVE_REVIEW:
      return merge({}, state, { [action.review.id]: action.review});
    default:
      return state;
  }
}

export default reviewsReducer;
