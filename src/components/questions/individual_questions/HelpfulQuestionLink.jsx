import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddAnswer.css';

const serverRoute = `http://localhost:${process.env.PORT}`;

function HelpfulQuestionLink({ question, helpfulQuestions, setHelpfulQuestions }) {
  const [questionHelpfulness, setQuestionHelpfulness] = useState(question.question_helpfulness);

  const incrementHelpfulness = () => axios.put(`/qa/questions/${question.question_id}/helpful`);

  const helpfulClicked = () => {
    const cache = JSON.parse(localStorage.getItem('helpfulQuestions'));
    const currentHelpfulQuestions = helpfulQuestions;
    if (!(helpfulQuestions.includes(question))) {
      incrementHelpfulness();
      setQuestionHelpfulness(questionHelpfulness + 1);
    }
    currentHelpfulQuestions.push(question);
    setHelpfulQuestions(currentHelpfulQuestions);
    localStorage.setItem('helpfulQuestions', JSON.stringify(currentHelpfulQuestions));
  };

  useEffect(() => {
    setQuestionHelpfulness(question.question_helpfulness);
  }, [question.question_helpfulness]);

  return (
    <div>
      <div className="helpful-question-button" onClick={helpfulClicked}>
        Helpful?&nbsp;&nbsp;
        <div className="yes-question-helpful">
          Yes
          {' ('}
        </div>
        <span className="helpful-number">
          {questionHelpfulness}
        </span>
        {') '}
      </div>
    </div>
  );
}

export default HelpfulQuestionLink;
