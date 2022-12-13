/* eslint-disable prefer-const */
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './questions.css';

import QuestionEntryItem from './QuestionEntryItem.jsx';

// const serverRoute = `http://localhost:${process.env.PORT}`;

function QuestionEntry({
  questions, currentProductId, helpfulAnswers, setHelpfulAnswers, helpfulQuestions, setHelpfulQuestions,
}) {
  console.log('questions', questions);
  if (questions.length > 0) {
    return (
      <div className="questions-entry">
        {questions.map((question, index) => (
          <QuestionEntryItem
            question={question}
            key={index}
            helpfulAnswers={helpfulAnswers}
            setHelpfulAnswers={setHelpfulAnswers}
            helpfulQuestions={helpfulQuestions}
            setHelpfulQuestions={setHelpfulQuestions}
            // key={index}
            currentProductId={currentProductId}
          />
        ))}
      </div>
    );
  }
  return (
    <div>This product has no questions!</div>
  );
}

export default QuestionEntry;
