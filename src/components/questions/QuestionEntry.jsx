/* eslint-disable prefer-const */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './questions.css';

import Answer from './Answer.jsx';
import LoadAnswerButton from './LoadAnswerButton.jsx';

const serverRoute = `http://localhost:${process.env.PORT}`;

function QuestionEntry({ question }) {
  const [allAnswers, setAllAnswers] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [page, setPage] = useState(1);
  const [countNum, setCountNum] = useState(0);

  console.log(question.question_id);

  let fetchAnswers = (allAnswerData, countInt) => {
    // axios.get(`${serverRoute}/qa/questions/${question.question_id}/answers`, {
    // params: {
    //   page: pageNumber,
    //   count: countNumber,
    // },
  // });
    let currentAnswers = [];
    for (let i = 0; i < countInt; i++) {
      currentAnswers.push(allAnswerData[i]);
    }
    setAnswers(currentAnswers);
  };

  const loadAnswers = () => {
    console.log(allAnswers, 'loadAnswers2');
    setCountNum(countNum + 2);
    fetchAnswers(allAnswers, countNum);
    // const newPage = page + 1;
    // setPage(newPage);
    // setCount(count + 2);
    // fetchAnswers(newPage, count)
    //   .then((results) => {
    //     console.log(results.data.results, 'testing in line of questionEntry');
    //     setAnswers([...answers, ...results.data.results]);
    //   });
  };

  useEffect(() => {
    axios.get(`${serverRoute}/qa/questions/${question.question_id}/answers`)
      .then((response) => {
        const answersArr = response.data.results;
        console.log(answersArr, 'useEffect QuestionEntry');
        setAllAnswers(answersArr);
        setIsLoading(false);
      });
    // // console.log('in here');
    // fetchAnswers(1, 2)
    //   .then((response) => {
    //     // console.log(response, 'in line 17 QE');
    //     let answersArr = response.data.results;
    //     // console.log(answersArr, 'in questionEntry.jsx');
    //     setAnswers(answersArr);
    //     setIsLoading(false);
    //   });
  }, []);

  let compareFn = (a, b) => {
    if (a.answer_helpfulness > b.answer_helpfulness) {
      return -1;
    } if (a.answer_helpfulness < b.answer_helpfulness) {
      return 1;
    }
    return 0;
  };

  useEffect(() => {
    allAnswers.sort(compareFn);
    loadAnswers(allAnswers);
  }, [allAnswers]);

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
      {countNum > allAnswers.length ? null : <LoadAnswerButton handleClick={loadAnswers} />}
    </div>
  );
}

export default QuestionEntry;
