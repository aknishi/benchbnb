import { connect } from 'react-redux';
import { fetchBenches } from '../../actions/bench_actions';
import Search from './search';
import values from 'lodash/values';

const mapStateToProps = ({ entities: { benches }}) => {
  return({
    benches: values(benches)
  });
}
const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
