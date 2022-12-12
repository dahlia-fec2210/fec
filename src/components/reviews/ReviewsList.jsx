import React from 'react';
import ReviewListItem from './review-list-item/ReviewListItem.jsx';

function ReviewsList({
  reviews, reportReview, bottomReviewsRef, currentProduct,
}) {
  if (reviews.length > 0) {
    return (
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <ReviewListItem
            review={review}
            reportReview={reportReview}
            key={review.review_id}
            index={index}
            currentProduct={currentProduct}
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
