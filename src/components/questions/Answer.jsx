import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './questions.css';

const serverRoute = `http://localhost:${process.env.PORT}`;

function Answer({ answer }) {
  console.log(answer, 'answer');

  return (
    <div className="answer">
      A:
      <div>
        {answer.body}
      </div>
      <div>
        By
        {' '}
        {answer.answerer_name}
        ,
        {' '}
        {answer.date}
      </div>
      <div>
        Helpful?
        {' '}
        {answer.helpfulness}
      </div>
      {/* <img src={answer.photos[0].url} /> */}
    </div>
  );
}

export default Answer;
