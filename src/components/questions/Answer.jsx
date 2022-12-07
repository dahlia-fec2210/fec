import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HelpfulLink from './HelpfulLink.jsx';
import ReportLink from './ReportLink.jsx';
import './questions.css';

const serverRoute = `http://localhost:${process.env.PORT}`;

function Answer({ answer }) {
  // console.log(answer, 'answer');

  return (
    <div className="answer">
      A:
      {' '}
      {answer.body}
      <div>
        By
        {' '}
        {answer.answerer_name}
        ,
        {' '}
        {answer.date}
      </div>
      <HelpfulLink answer={answer} />
      <ReportLink answer={answer} />
    </div>
  );
}

export default Answer;
