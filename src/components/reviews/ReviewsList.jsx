import React from 'react';
import ReviewListItem from './review-list-item/ReviewListItem.jsx';

function ReviewsList({ reviews, reportReview, bottomReviewsRef }) {
  if (reviews.length > 0) {
    return (
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <ReviewListItem
            review={review}
            reportReview={reportReview}
            key={review.review_id}
            index={index}
          />
        ))}
        <div ref={bottomReviewsRef} />
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
