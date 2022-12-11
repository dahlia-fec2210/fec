import React, { useState, useEffect } from 'react';
import axios from 'axios';

const serverRoute = `http://localhost:${process.env.PORT}`;

function HelpfulAnswerLink({ answer, helpfulAnswers, setHelpfulAnswers }) {
  const [answerHelpfulness, setAnswerHelpfulness] = useState(answer.helpfulness);

  const incrementHelpfulness = () => axios.put(`${serverRoute}/qa/answers/${answer.answer_id}/helpful`);

  const helpfulClicked = () => {
    const cache = JSON.parse(localStorage.getItem('helpfulAnswers'));
    const currentHelpfulAnswers = helpfulAnswers;
    if (!(helpfulAnswers.includes(answer))) {
      console.log(cache, 'is cache inside line 23');
      incrementHelpfulness();
      setAnswerHelpfulness(answerHelpfulness + 1);
    }
    currentHelpfulAnswers.push(answer);
    setHelpfulAnswers(currentHelpfulAnswers);
    localStorage.setItem('helpfulAnswers', JSON.stringify(currentHelpfulAnswers));
    console.log(helpfulAnswers.includes(answer), '6974');
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
