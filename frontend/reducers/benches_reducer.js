import merge from 'lodash/merge';
import { RECEIVE_BENCHES, RECEIVE_BENCH, RECEIVE_REVIEW } from '../actions/bench_actions';

const benchesReducer = (state = {}, action) => {
  Object.freeze(state);
   let newState;
  switch(action.type){
    case RECEIVE_BENCHES:
      return action.benches;
    case RECEIVE_BENCH:
      return merge ({}, state, {[action.bench.id]: action.bench});
    case RECEIVE_REVIEW:
      const { review, average_rating } = action;
      newState = merge({}, state);
      newState[review.bench_id].reviewIds.push(review.id)
      newState[review.bench_id].average_rating = average_rating;
      return newState;
    default:
      return state;
  }
}

export default benchesReducer;
