import React from 'react';
import { connect } from 'react-redux';

const Review = ({ review, author }) => {
  const { rating, body } = review;
  return (
    <div>
      <ul className="review-list-item">
        <li>Rating: {rating}</li>
        <li>{body} - by {author.username}</li>
      </ul>
    </div>
  );
};

const mapStateToProps = ({entities: { users }}, { review }) => {
  console.log(users);
  console.log(review);
  return {
    author: users[review.author_id]
  };
};

export default connect(mapStateToProps)(Review);
