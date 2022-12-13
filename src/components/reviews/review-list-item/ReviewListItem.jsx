// TODO: Implement SHOW PICTURE IN REVIEW
import React from 'react';
import axios from 'axios';
import SellerResponse from './SellerResponse.jsx';
import SubmissionInfo from './SubmissionInfo.jsx';
import DisplayStar from '../../common/Star.jsx';
import ReviewPhotos from './ReviewPhotos.jsx';
import logInteraction from '../logInteraction.jsx';

const { useState } = React;
const serverRoute = `http://localhost:${process.env.PORT}`;

function ReviewsListItem({
  review, reportReview, index, currentProduct,
}) {
  const [helpfulness, setHelpfulness] = useState(review.helpfulness);
  const [beenClicked, setBeenClicked] = useState(false);
  const possibleStars = 5;
  const starPercentage = (review.rating / possibleStars) * 100;

  const handleHelpfulClick = () => {
    if (!beenClicked) {
      logInteraction('user-review-helpful-btn', [currentProduct, review.review_id]);
      const route = `/reviews/${review.review_id}/helpful`;
      axios.put(route)
        .then(() => {
          setHelpfulness(helpfulness + 1);
          setBeenClicked(!beenClicked);
        });
    }
  };

  const handleReportClick = () => {
    reportReview(review.review_id, index);
    logInteraction('user-review-report-btn', [currentProduct, review.review_id]);
  };

  return (
    <div className="reviews-list-item">
      <div className="list-star-info">
        <DisplayStar percentage={starPercentage} />
        <SubmissionInfo user={review.reviewer_name} date={review.date} />
      </div>
      {review.summary ? <div className="review-summary">{review.summary}</div> : null}
      <div className="review-body">{review.body}</div>
      {review.recommend ? (
        <div className="review-recommend">
          <i className="fa-solid fa-check" />
          {' '}
          I recommend this product
        </div>
      ) : null}
      {review.photos.length > 0
        ? (
          <ReviewPhotos
            photos={review.photos}
            reviewId={review.review_id}
          />
        )
        : null}
      {review.response ? <SellerResponse response={review.response} /> : null}
      <span className="review-helpful">
        Helpful?&nbsp;&nbsp;
        <span onClick={handleHelpfulClick} className="review-yes">
          Yes
        </span>
        <span className="review-helpfulness">
        &nbsp;(
          <span className="review-helpfulness-number">{helpfulness}</span>
          )&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        </span>
        <span onClick={handleReportClick} className="review-report">
          Report
        </span>
      </span>
    </div>
  );
}

export default ReviewsListItem;
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
