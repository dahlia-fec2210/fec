/* eslint-disable prefer-const */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionEntry from './QuestionEntry.jsx';
import LoadQuestionButton from './LoadQuestionButton.jsx';

import AddQuestionModal from './modals/AddQuestionModal.jsx';

const serverRoute = `http://localhost:${process.env.PORT}`;

function Questions({ currentProduct }) {
  const [allQuestions, setAllQuestions] = useState(null);
  const [questionsList, setQuestionsList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [listCount, setListCount] = useState(null);
  const [openAddQuestionModal, setOpenAddQuestionModal] = useState(false);

  console.log('currentProduct is', currentProduct);

  const addTwoQuestions = () => {
    const newItemCount = listCount + 2;
    setListCount(newItemCount);
    const newQuestionsSet = allQuestions.slice(0, newItemCount);
    setQuestionsList(newQuestionsSet);
  };

  let compareFn = (a, b) => {
    if (a.question_helpfulness > b.question_helpfulness) {
      return -1;
    } if (a.question_helpfulness < b.question_helpfulness) {
      return 1;
    }
    return 0;
  };

  const fetchAllQuestions = () => axios.get(`${serverRoute}/qa/questions`, {
    params: {
      product_id: currentProduct,
      count: 1000,
    },
  })
    .then((response) => {
      const questionsArr = [...response.data.results].sort(compareFn);
      setAllQuestions(questionsArr);
      // setIsLoading(false);
      return questionsArr;
    });

  useEffect(() => {
    fetchAllQuestions()
      .then((questionsArr) => {
        setQuestionsList(questionsArr.slice(0, 2));
        setListCount(2);
      });
  }, [currentProduct]);

  // const addQuestion = () => {
  //   console.log('handling Add');
  // };

  return (
    <div>
      <h1>Questions</h1>
      {questionsList && questionsList.map((individualQ, index) => <QuestionEntry key={index} question={individualQ} currentProductId={currentProduct} />)}
      {listCount > questionsList.length ? null
        : <LoadQuestionButton handleClick={addTwoQuestions} />}
      <div>
        <button
          className="openAddQuestionModalBtn"
          onClick={() => {
            setOpenAddQuestionModal(true);
          }}
        >
          Add a Question

        </button>
        {openAddQuestionModal && <AddQuestionModal closeModal={setOpenAddQuestionModal} currentProductId={currentProduct} />}
      </div>
    </div>
  );
}

export default Questions;
