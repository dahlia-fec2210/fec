import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerSubmitInfo from './AnswerSubmitInfo.jsx';
import HelpfulAnswerLink from './HelpfulAnswerLink.jsx';
import ReportAnswerLink from './ReportAnswerLink.jsx';
import './questions.css';

const serverRoute = `http://localhost:${process.env.PORT}`;

function Answer({ answer }) {
  console.log(answer, 'answer123');

  return (
    <div className="answer">
      A:
      {' '}
      {answer.body}
      <AnswerSubmitInfo answer={answer} />
      <HelpfulAnswerLink answer={answer} />
      <ReportAnswerLink answer={answer} />
    </div>
  );
}

export default Answer;
