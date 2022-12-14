import React from 'react';
import { format, parseISO } from 'date-fns';

function SubmissionInfo({ user, date }) {
  return (
    <span className="review-submission-info">
      <span className="review-list-username">{user}</span>
      &nbsp;&nbsp;- &nbsp;&nbsp;
      <span className="review-list-date">{format(parseISO(date), 'MMM do, yyyy ')}</span>
    </span>
  );
}

export default SubmissionInfo;
