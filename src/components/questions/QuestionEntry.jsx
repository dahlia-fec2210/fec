import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './questions.css';

import Answer from './Answer.jsx';

const serverRoute = `http://localhost:${process.env.PORT}`;

function QuestionEntry({ question }) {
  const [answers, setAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [copyAnswers, setCopyAnswers] = useState([]);

  useEffect(() => {
    axios.get(`${serverRoute}/qa/questions/${question.question_id}/answers`)
      .then((response) => {
        const answersArr = response.data.results;
        console.log(answersArr);
        const firstTwo = [];
        firstTwo.push(answersArr[0]);
        firstTwo.push(answersArr[1]);
        setAnswers(firstTwo);
        // setCopyAnswers(answersArr);
        setIsLoading(false);
      });
  }, []);

  let content;
  if (isLoading) {
    content = <div className="AnswerLoading">Loading...</div>;
  } else {
    content = (
      answers.map((individualAnswers, index) => <Answer key={index} answer={individualAnswers} />)
    );
  }

  // const clickedMoreAnswersButton = (event) => {
  //   event.preventDefault();
  //   setIsLoading(true);
  //   setAnswers(copyAnswers);
  //   console.log('clicked');
  // };

  return (
    <div className="question">
      <div>
        Q:
        <div>
          {question.question_body}
        </div>
        {/* <div>
          {question.asker_name}
        </div> */}
        <div>
          {question.question_helpfulness}
        </div>
      </div>
      <div>
        {content}
      </div>
      {/* <button type="text" onClick={clickedMoreAnswersButton}>See more answers</button> */}
    </div>
  );
}

export default QuestionEntry;
