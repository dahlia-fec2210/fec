import React, { useState, useEffect } from 'react';
import axios from 'axios';

const serverRoute = `http://localhost:${process.env.PORT}`;

function HelpfulQuestionLink({ question }) {
  const [questionHelpfulness, setQuestionHelpfulness] = useState(question.question_helpfulness);

  const incrementHelpfulness = () => axios.put(`${serverRoute}/qa/questions/${question.question_id}/helpful`);

  const helpfulClicked = () => {
    incrementHelpfulness();
    setQuestionHelpfulness(questionHelpfulness + 1);
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
