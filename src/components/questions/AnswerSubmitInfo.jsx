import React from 'react';
import dateFormat from 'dateformat';

function AnswerSubmitInfo({ answer }) {
  return (
    <div>
      By
      {' '}
      {answer.answerer_name}
      ,
      {' '}
      {dateFormat(answer.date, 'mmmm d, yyyy ')}
    </div>
    // <span>
    //   {`${user} - ${dateFormat(date, 'mmmm d, yyyy ')}`}
    // </span>
  );
}

export default AnswerSubmitInfo;
