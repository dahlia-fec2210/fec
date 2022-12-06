import React from 'react';
import axios from 'axios';
import SellerResponse from './SellerResponse.jsx';
import SubmissionInfo from './SubmissionInfo.jsx';
import DisplayStar from '../../common/Star.jsx';

const { useState } = React;
const serverRoute = `http://localhost:${process.env.PORT}`;

function ReviewsListItem({ review, reportReview, index }) {
  const [helpfulness, setHelpfulness] = useState(review.helpfulness);
  const [beenClicked, setBeenClicked] = useState(false);
  const possibleStars = 5;
  const starPercentage = (review.rating / possibleStars) * 100;

  const handleHelpfulClick = () => {
    if (!beenClicked) {
      const route = `${serverRoute}/reviews/${review.review_id}/helpful`;
      axios.put(route)
        .then(() => {
          setHelpfulness(helpfulness + 1);
          setBeenClicked(!beenClicked);
        });
    }
  };

  const handleReportClick = () => {
    reportReview(review.review_id, index);
  };

  return (
    <div className="reviews-list-item">
      <DisplayStar percentage={starPercentage} />
      <SubmissionInfo user={review.reviewer_name} date={review.date} />
      {review.summary ? <div>{review.summary}</div> : null}
      <div>{review.body}</div>
      {review.response ? <SellerResponse response={review.response} /> : null}
      <span>
        Helpful?&nbsp;&nbsp;
        <span onClick={handleHelpfulClick}>
          Yes
        </span>
        <span>
        &nbsp;(
          {helpfulness}
          )&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        </span>
        <span onClick={handleReportClick}>
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
