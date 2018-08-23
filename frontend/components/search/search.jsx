import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from '../bench_map/bench_map';

const Search = ({ benches, fetchBenches, updateFilter }) => (
  <div className="search-container">
    <BenchMap benches={benches} updateFilter={updateFilter}/>
    <BenchIndex benches={benches} fetchBenches={fetchBenches}/>
  </div>
)

export default Search;
