import React from 'react';
import { format, parseISO } from 'date-fns';

function AnswerSubmitInfo({ answer }) {
  return (
    <div>
      <div className="answer-submit-info-name">
        <b>By</b>
        {' '}
        {answer.answerer_name === 'Seller' ? <b>{answer.answerer_name}</b> : answer.answerer_name}
      </div>

      <div className="answer-submit-info-date">
        {format(parseISO(answer.date), 'MMM do, yyyy ')}
      </div>
    </div>
    // <span>
    //   {`${user} - ${dateFormat(date, 'mmmm d, yyyy ')}`}
    // </span>
  );
}

export default AnswerSubmitInfo;
