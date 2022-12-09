import React, { useState, useEffect } from 'react';
import axios from 'axios';

const serverRoute = `http://localhost:${process.env.PORT}`;

function HelpfulAnswerLink({ answer }) {
  const [answerHelpfulness, setAnswerHelpfulness] = useState(answer.helpfulness);

  const incrementHelpfulness = () => axios.put(`${serverRoute}/qa/answers/${answer.answer_id}/helpful`);

  const helpfulClicked = () => {
    incrementHelpfulness();
    setAnswerHelpfulness(answerHelpfulness + 1);
    // .then((newHelpfulness) => {
    //   setAnswerHelpfulness(newHelpfulness);
    // });
  };

  return (
    <div>
      <div onClick={helpfulClicked}>
        Helpful?
        {' '}
        Yes
        {' ('}
        {answerHelpfulness}
        {') '}
      </div>
    </div>
  );
}

export default HelpfulAnswerLink;
