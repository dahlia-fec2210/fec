import React, { useState, useEffect } from 'react';
import axios from 'axios';

const serverRoute = `http://localhost:${process.env.PORT}`;

function HelpfulQuestionLink({ question, helpfulQuestions, setHelpfulQuestions }) {
  const [questionHelpfulness, setQuestionHelpfulness] = useState(question.question_helpfulness);

  const incrementHelpfulness = () => axios.put(`${serverRoute}/qa/questions/${question.question_id}/helpful`);

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

  return (
    <div>
      <div onClick={helpfulClicked}>
        Helpful?
        {' '}
        Yes
        {' ('}
        {questionHelpfulness}
        {') '}
      </div>
    </div>
  );
}

export default HelpfulQuestionLink;
