import { connect } from 'react-redux';
import { fetchBenches } from '../../actions/bench_actions';
import { udpateFilter } from '../../actions/filter_actions';
import Search from './search';
import values from 'lodash/values';

const mapStateToProps = ({ entities: { benches }}) => {
  return({
    benches: values(benches)
  });
}
const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(udpateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
