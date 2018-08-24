import React from 'react';

const handleChange = (filter, updateFilter) => e => (
  updateFilter(filter, parseInt(e.currentTarget.value))
);

const FilterForm = ({ minSeating, maxSeating, updateFilter }) => (
  <div className="filter-container">
    <span className="filter-title">Filter results:</span>
    <br/>
    <br/>
    <label className="filter">Minimum Seats</label>
    <input
      type="number"
      className="filter"
      min="2"
      value={minSeating}
      onChange={handleChange('minSeating', updateFilter)}
    />
    <br/>
    <label className="filter">Maximum Seats</label>
    <input
      className="filter"
      type="number"
      min="2"
      value={maxSeating}
      onChange={handleChange('maxSeating', updateFilter)}
    />
  </div>
);

export default FilterForm;
