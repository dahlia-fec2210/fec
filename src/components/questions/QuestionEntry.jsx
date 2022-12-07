/* eslint-disable prefer-const */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './questions.css';

import Answer from './Answer.jsx';
import LoadAnswerButton from './LoadAnswerButton.jsx';

const serverRoute = `http://localhost:${process.env.PORT}`;

function QuestionEntry({ question }) {
  const [allAnswers, setAllAnswers] = useState([]);
  const [answersList, setAnswersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [listCount, setListCount] = useState(0);

  console.log(question.question_id);

  const addTwoQuestions = () => {
    const newItemCount = listCount + 2;
    setListCount(newItemCount);
    const newAnswerSet = allAnswers.slice(0, newItemCount);
    setAnswersList(newAnswerSet);
  };

  let compareFn = (a, b) => {
    if (a.answer_helpfulness > b.answer_helpfulness) {
      return -1;
    } if (a.answer_helpfulness < b.answer_helpfulness) {
      return 1;
    }
    return 0;
  };

  const fetchAllAnswers = () => axios.get(`${serverRoute}/qa/questions/${question.question_id}/answers`)
    .then((response) => {
      const answersArr = [...response.data.results].sort(compareFn);
      setAllAnswers(answersArr);
      setIsLoading(false);
      return answersArr;
    });

  useEffect(() => {
    fetchAllAnswers()
      .then((answersArr) => {
        setAnswersList(answersArr.slice(0, 2));
        setListCount(2);
      });
  }, []);

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
      {answersList && answersList.map((individualA, index) => <Answer key={index} answer={individualA} />)}
      {listCount > allAnswers.length ? null : <LoadAnswerButton handleClick={addTwoQuestions} />}
    </div>
  );
}

export default QuestionEntry;
