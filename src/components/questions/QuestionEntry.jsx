/* eslint-disable prefer-const */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './questions.css';

import Answer from './Answer.jsx';
import LoadAnswerButton from './LoadAnswerButton.jsx';

const serverRoute = `http://localhost:${process.env.PORT}`;

function QuestionEntry({ question }) {
  const [answers, setAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [copyAnswers, setCopyAnswers] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(2);

  console.log(question.question_id);
  let fetchAnswers = (pageNumber, countNumber) => axios.get(`${serverRoute}/qa/questions/${question.question_id}/answers`, {
    params: {
      page: pageNumber,
      count: countNumber,
    },
  });

  const loadAnswers = () => {
    const newPage = page + 1;
    setPage(newPage);
    setCount(count + 2);
    fetchAnswers(newPage, count)
      .then((results) => {
        console.log(results.data.results, 'testing in line of questionEntry');
        setAnswers([...answers, ...results.data.results]);
      });
  };

  useEffect(() => {
    console.log('in here');
    fetchAnswers(1, 2)
      .then((response) => {
        console.log(response, 'in line 17 QE');
        let answersArr = response.data.results;
        console.log(answersArr, 'in questionEntry.jsx');
        setAnswers(answersArr);
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

  return (
    <div className="question">
      <div>
        Q:
        {' '}
        {question.question_body}
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
      <LoadAnswerButton handleClick={loadAnswers} />
    </div>
  );
}

export default QuestionEntry;
