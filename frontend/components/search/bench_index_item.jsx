import React from 'react';
import merge from 'lodash/merge';

class BenchIndexItem extends React.Component {
  render() {
    const bench = this.props.bench;
    return (
      <li>{bench.description}</li>
    )
  }
}

export default BenchIndexItem;
