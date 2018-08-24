import React from 'react';
import merge from 'lodash/merge';
import { withRouter } from 'react-router-dom';

class BenchIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    const benchId = this.props.bench.id;
    this.props.history.push(`/benches/${benchId}`);
  }

  render() {
    const { average_rating, description } = this.props.bench;
    return (
      <div className="bench-index-item" onClick={this.handleClick}>
        <div className="index-item-info">
          <span className="category-title">Rating:</span>
          <span>{average_rating || 'No reviews yet'}</span>
          <span className="category-title">Description:</span>
          <span>{description}</span>
        </div>
      </div>
    )
  }
}

export default withRouter(BenchIndexItem);
