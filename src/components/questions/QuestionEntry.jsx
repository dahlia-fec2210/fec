/* eslint-disable prefer-const */
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './questions.css';

import QuestionEntryItem from './QuestionEntryItem.jsx';

// const serverRoute = `http://localhost:${process.env.PORT}`;

function QuestionEntry({ questions, currentProductId }) {
  console.log('questions', questions);
  if (questions.length > 0) {
    return (
      <div>
        {questions.map((question) => (
          <QuestionEntryItem
            question={question}
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
