import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from '../bench_map/bench_map';
import FilterForm from './filter_form';

const Search = ({ benches, minSeating, maxSeating, updateFilter }) => (
  <div className="search-container">
    <div className="left-half">
      <h4 className="form-title">Click the Map to Add a Bench!</h4>
      <BenchMap benches={benches} updateFilter={updateFilter}/>
    </div>

    <div className="right-half">
      <FilterForm
        minSeating={minSeating}
        maxSeating={maxSeating}
        updateFilter={updateFilter}
      />
      <BenchIndex
        benches={benches}
      />
    </div>
  </div>
)

export default Search;
