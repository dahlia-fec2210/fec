import React from 'react';
import dateFormat from 'dateformat';

function AnswerSubmitInfo({ answer }) {
  return (
    <div>
      <div className="answer-submit-info-name">
        By
        {' '}
        {answer.answerer_name === 'seller' ? <b>{answer.answerer_name}</b> : answer.answerer_name}
      </div>

      <div className="answer-submit-info-date">
        {dateFormat(answer.date, 'mmmm d, yyyy ')}
      </div>
    </div>
    // <span>
    //   {`${user} - ${dateFormat(date, 'mmmm d, yyyy ')}`}
    // </span>
  );
}

export default AnswerSubmitInfo;
