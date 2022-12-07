import React, { useState, useEffect } from 'react';
import axios from 'axios';

const serverRoute = `http://localhost:${process.env.PORT}`;

function ReportAnswerLink({ answer }) {
  const reportClicked = () => {
    console.log(answer.answer_id, 'is this correct answer id');
    axios.put(`${serverRoute}/qa/answers/${answer.answer_id}/report`)
      .then((result) => {
        console.log(result, 'reported');
      });
  };

  return (
    <div>
      <div onClick={reportClicked}>
        Report
      </div>
    </div>
  );
}

export default ReportAnswerLink;
