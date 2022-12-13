import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerListItem from './AnswerListItem.jsx';
import './questions.css';

function AnswerList({ answers, helpfulAnswers, setHelpfulAnswers }) {
  // console.log(answers[0].answer_id, answers[0].helpfulness, 'answer123');
  if (answers.length > 0) {
    return (
      <div className="answers-entry">
        {answers.map((answer, index) => (
          <AnswerListItem answer={answer} key={index} helpfulAnswers={helpfulAnswers} setHelpfulAnswers={setHelpfulAnswers} />
        ))}
      </div>
    );
  }
  return (
    <div>This question has no answers!</div>
  );
}

export default AnswerList;
