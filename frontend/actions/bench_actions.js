import * as APIUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
export const RECEIVE_BENCH = "RECEIVE_BENCH";

const receiveBenches = benches => ({
  type: RECEIVE_BENCHES,
  benches
});

const receiveBench = bench => ({
  type: RECEIVE_BENCH,
  bench
});

export const fetchBenches = filters => dispatch => (
  APIUtil.fetchBenches(filters).then( benches => dispatch(receiveBenches(benches)))
)

export const createBench = bench => dispatch => (
  APIUtil.createBench(bench).then( bench => dispatch(receiveBench(bench)))
)
