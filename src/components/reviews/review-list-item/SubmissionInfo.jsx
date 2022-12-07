import React from 'react';
import dateFormat from 'dateformat';

function SubmissionInfo({ user, date }) {
  return (
    <span>
      {`${user} - ${dateFormat(date, 'mmmm d, yyyy ')}`}
    </span>
  );
}

export default SubmissionInfo;
