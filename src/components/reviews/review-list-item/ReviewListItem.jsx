import React from 'react';
import SellerResponse from './SellerResponse.jsx';
import SubmissionInfo from './SubmissionInfo.jsx';

function ReviewsListItem({ review }) {
  return (
    <div className="reviews-list-item">
      <div> STARS HERE</div>
      <SubmissionInfo user={review.reviewer_name} date={review.date} />
      {review.summary ? <div>{review.summary}</div> : null}
      <div>{review.body}</div>
      {review.response ? <SellerResponse response={review.response} /> : null}
      <span>
        Helpful?&nbsp;&nbsp;
        <span>
          Yes
        </span>
        <span>
        &nbsp;(
          {review.helpfulness}
          )&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        </span>
        <span>
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
