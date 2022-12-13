import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerSubmitInfo from './individual_answers/AnswerSubmitInfo.jsx';
import HelpfulAnswerLink from './individual_answers/HelpfulAnswerLink.jsx';
import ReportAnswerLink from './individual_answers/ReportAnswerLink.jsx';
import AnswerPhoto from './individual_answers/AnswerPhoto.jsx';
import './questions.css';

function AnswerListItem({ answer, helpfulAnswers, setHelpfulAnswers }) {
  console.log(answer.answer_id, answer.helpfulness, 'answer123');

  return (
    <div className="answer">
      <div className="answer-body">
        <div className="answer-body-answer">
          A:
          {' '}
          {answer.body}
        </div>
        {answer.photos.length === 0 ? null : <AnswerPhoto answer={answer} />}
        <div className="answer-body-submit-info">
          <AnswerSubmitInfo answer={answer} />
        </div>
        <span className="answer-body-helpful-report">
          <HelpfulAnswerLink answer={answer} helpfulAnswers={helpfulAnswers} setHelpfulAnswers={setHelpfulAnswers} />
          <ReportAnswerLink answer={answer} />
        </span>
      </div>
    </div>
  );
}

export default AnswerListItem;
