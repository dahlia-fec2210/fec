/* eslint-disable prefer-const */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
// import './questions.css';

import AnswerList from './AnswerList.jsx';
import LoadAnswerButton from './individual_questions/LoadAnswerButton.jsx';
import CollapseAnswerButton from './individual_questions/CollapseAnswerButton.jsx';
import HelpfulQuestionLink from './individual_questions/HelpfulQuestionLink.jsx';
import AddAnswer from './individual_questions/AddAnswer.jsx';

const serverRoute = `http://localhost:${process.env.PORT}`;

function QuestionEntryItem({
  question, currentProductId, helpfulAnswers, setHelpfulAnswers, helpfulQuestions, setHelpfulQuestions,
}) {
  const [allAnswers, setAllAnswers] = useState([]);
  const [answersList, setAnswersList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [page, setPage] = useState(1);
  const [listCount, setListCount] = useState(0);
  const answersButtonRef = useRef(null);
  const answersListRef = useRef(null);

  // console.log(question.question_id);

  const addTwoQuestions = () => {
    const newItemCount = listCount + 2;
    setListCount(newItemCount);
    const newAnswerSet = allAnswers.slice(0, newItemCount);
    setAnswersList(newAnswerSet);
    setTimeout(() => {
      answersButtonRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      setTimeout(() => {
        answersListRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      }, 350);
    }, 200);
  };

  let compareFn = (a, b) => {
    if (a.answerer_name === 'Seller' && b.answerer_name !== 'Seller') {
      return -1;
    } if (a.answerer_name !== 'Seller' && b.answerer_name === 'Seller') {
      return 1;
    } if (a.answer_helpfulness > b.answer_helpfulness) {
      return -1;
    } if (a.answer_helpfulness < b.answer_helpfulness) {
      return 1;
    }
    return 0;
  };

  const fetchAllAnswers = (currentQuestionId) => axios.get(`${serverRoute}/qa/questions/${currentQuestionId}/answers`, {
    params: {
      count: 1000,
    },
  })
    .then((response) => {
      const answersArr = [...response.data.results].sort(compareFn);
      console.log(answersArr, 'thisAnswer');
      setAllAnswers(answersArr);
      // setIsLoading(false);
      return answersArr;
    });

  useEffect(() => {
    fetchAllAnswers(question.question_id)
      .then((answersArr) => {
        console.log(answersArr.slice(0, 2), 'in QuestionEntryItem');
        setAnswersList(answersArr.slice(0, 2));
        setListCount(2);
      });
  }, [question]);

  return (
    <div className="questions-entry-item">
      <div className="question-entry-body">
        <div className="question-entry-body-question">
          Q:
          {' '}
          {question.question_body}
        </div>
        <div className="question-entry-addanswer-button">
          <HelpfulQuestionLink question={question} helpfulQuestions={helpfulQuestions} setHelpfulQuestions={setHelpfulQuestions} />
          <AddAnswer question={question} currentProductId={currentProductId} />
        </div>
      </div>
      {/* {answersList && answersList.map((individualA, index) => <Answer key={index} answer={individualA} />)} */}
      <AnswerList answers={answersList} helpfulAnswers={helpfulAnswers} setHelpfulAnswers={setHelpfulAnswers} answersListRef={answersListRef} />
      <div className="question-entry-more-answers">
        {allAnswers.length <= 2 ? null : listCount >= allAnswers.length ? <CollapseAnswerButton /> : <LoadAnswerButton handleClick={addTwoQuestions} answersButtonRef={answersButtonRef} />}
      </div>
    </div>
  );
}

export default QuestionEntryItem;
