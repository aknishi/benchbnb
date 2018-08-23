import { fetchBenches } from './bench_actions';

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

const changeFilter = (filter, value) => ({
  type: UPDATE_BOUNDS,
  filter,
  value
})

export const udpateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchBenches(getState().ui.filters)(dispatch);
};
