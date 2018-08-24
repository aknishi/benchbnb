import React from 'react'
import ReviewListItemContainer from './review_list_item_container';

const reviewList = (reviews) => (
  reviews.map(review => (
    <ReviewListItemContainer key={review.id} review={review} />
  ))
);

const BenchDetail = ({ bench, reviews }) => {
  return(
    <div>
      <ul>
        <li>Description: {bench.description} </li>
        <li>Number of Seats: {bench.seating} </li>
        <li>Latitude: {bench.lat}</li>
        <li>Longitude: {bench.lng}</li>
      </ul>
      <div className="reviews-container">
        <h3 className="form-title">Reviews</h3>
        {reviewList(reviews)}
      </div>
    </div>
  )
}

export default BenchDetail;
