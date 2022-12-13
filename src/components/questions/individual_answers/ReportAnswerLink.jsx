import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../questions.css';

const serverRoute = `http://localhost:${process.env.PORT}`;

function ReportAnswerLink({ answer }) {
  const [clickedReport, setClickedReport] = useState(false);

  const reportClicked = () => {
    console.log(answer.answer_id, 'is this correct answer id');
    setClickedReport(!clickedReport);
    axios.put(`/qa/answers/${answer.answer_id}/report`)
      .then((result) => {
        console.log(result, 'reported');
      });
  };

  return (
    <div>
      <div className="answer-report-button" onClick={reportClicked}>
        {clickedReport ? 'Reported' : 'Report'}
      </div>
    </div>
  );
}

export default ReportAnswerLink;
