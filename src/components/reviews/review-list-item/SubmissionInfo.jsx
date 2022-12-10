import React from 'react';
import dateFormat from 'dateformat';

function SubmissionInfo({ user, date }) {
  return (
    <span className="review-submission-info">
      <span className="review-list-username">{user}</span>
      &nbsp;&nbsp;- &nbsp;&nbsp;
      <span className="review-list-date">{dateFormat(date, 'mmmm d, yyyy ')}</span>
    </span>
  );
}

export default SubmissionInfo;
