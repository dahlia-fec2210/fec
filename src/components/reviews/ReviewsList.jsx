import React from 'react';
import ReviewListItem from './review-list-item/ReviewListItem.jsx';

function ReviewsList({ reviews }) {
  if (reviews.length > 0) {
    return (
      <div>
        {reviews.map((review) => <ReviewListItem review={review} key={review.review_id} />)}
      </div>
    );
  }
  return (
    <div>No Reviews Yet!</div>
  );
}

export default ReviewsList;
/* const example = {
  body: 'Checking to see if this works on my cell phone.   ',
  date: '2022-10-26T00:00:00.000Z',
  helpfulness: 0,
  photos: [],
  rating: 4,
  recommend: true,
  response: null,
  review_id: 1277270,
  reviewer_name: 'Bb',
  summary: 'Testing review',
};
 */
