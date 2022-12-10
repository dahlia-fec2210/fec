import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerSubmitInfo from './individual_answers/AnswerSubmitInfo.jsx';
import HelpfulAnswerLink from './individual_answers/HelpfulAnswerLink.jsx';
import ReportAnswerLink from './individual_answers/ReportAnswerLink.jsx';
import AnswerPhoto from './individual_answers/AnswerPhoto.jsx';
import './questions.css';

const serverRoute = `http://localhost:${process.env.PORT}`;

function AnswerListItem({ answer }) {
  console.log(answer, 'answer123');

  return (
    <div className="answer">
      A:
      {' '}
      {answer.body}
      {answer.photos.length === 0 ? null : <AnswerPhoto answer={answer} />}
      <AnswerSubmitInfo answer={answer} />
      <HelpfulAnswerLink answer={answer} />
      <ReportAnswerLink answer={answer} />
    </div>
  );
}

export default AnswerListItem;
