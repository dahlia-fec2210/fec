import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './individual_answers.css';

const serverRoute = `http://localhost:${process.env.PORT}`;

function HelpfulAnswerLink({ answer, helpfulAnswers, setHelpfulAnswers }) {
  const [answerHelpfulness, setAnswerHelpfulness] = useState(answer.helpfulness);

  const incrementHelpfulness = () => axios.put(`/qa/answers/${answer.answer_id}/helpful`);

  const helpfulClicked = () => {
    const cache = JSON.parse(localStorage.getItem('helpfulAnswers'));
    const currentHelpfulAnswers = helpfulAnswers;
    if (!(helpfulAnswers.includes(answer))) {
      incrementHelpfulness();
      setAnswerHelpfulness(answerHelpfulness + 1);
    }
    currentHelpfulAnswers.push(answer);
    setHelpfulAnswers(currentHelpfulAnswers);
    localStorage.setItem('helpfulAnswers', JSON.stringify(currentHelpfulAnswers));
    console.log(helpfulAnswers.includes(answer), '6974');
  };

  useEffect(() => {
    setAnswerHelpfulness(answer.helpfulness);
  }, [answer.helpfulness]);

  return (
    <div className="answer-helpful-link">
      <div onClick={helpfulClicked}>
        Helpful?&nbsp;&nbsp;
        {' '}
        <span className="answer-helpful-yes-button">
          Yes
        </span>
&nbsp;
        {' ('}
        <span className="helpful-number">
          {answerHelpfulness}
        </span>
        {') '}
&nbsp;&nbsp;|&nbsp;&nbsp;
      </div>
    </div>
  );
}

export default HelpfulAnswerLink;
