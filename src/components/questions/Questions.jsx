/* eslint-disable prefer-const */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionEntry from './QuestionEntry.jsx';
import LoadQuestionButton from './individual_questions/LoadQuestionButton.jsx';
import CollapseQuestionButton from './individual_questions/CollapseQuestionButton.jsx';
import AddQuestionModal from './modals/AddQuestionModal.jsx';
import QuestionSearch from './QuestionSearch.jsx';
import './questions.css';

const serverRoute = `http://localhost:${process.env.PORT}`;

function Questions({ currentProduct }) {
  const [allQuestions, setAllQuestions] = useState(null);
  const [questionsList, setQuestionsList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [listCount, setListCount] = useState(null);
  const [openAddQuestionModal, setOpenAddQuestionModal] = useState(false);
  const [prefilterQuestions, setPrefilterQuestions] = useState(null);

  // console.log('currentProduct is', currentProduct);

  const addTwoQuestions = () => {
    const newItemCount = listCount + 2;
    setListCount(newItemCount);
    const newQuestionsSet = allQuestions.slice(0, newItemCount);
    setQuestionsList(newQuestionsSet);
    setPrefilterQuestions(newQuestionsSet);
  };

  let compareFn = (a, b) => {
    if (a.question_helpfulness > b.question_helpfulness) {
      return -1;
    } if (a.question_helpfulness < b.question_helpfulness) {
      return 1;
    }
    return 0;
  };

  const fetchAllQuestions = (productId) => axios.get(`${serverRoute}/qa/questions`, {
    params: {
      product_id: productId,
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
    fetchAllQuestions(currentProduct)
      .then((questionsArr) => {
        setQuestionsList(questionsArr.slice(0, 2));
        setPrefilterQuestions(questionsArr.slice(0, 2));
        setListCount(2);
      });
  }, [currentProduct]);

  // const addQuestion = () => {
  //   console.log('handling Add');
  // };

  const searchingQuestion = (searchedQuestion) => {
    console.log(searchedQuestion, 'searchedQuestion coming into searchingQuestion');
    if (searchedQuestion.length === 0) {
      setQuestionsList(prefilterQuestions);
    } else {
      let searchedQuestionArr = [];
      console.log(allQuestions, 'allQuestionis?');
      for (let i = 0; i < allQuestions.length; i++) {
        let currentQuestion = allQuestions[i].question_body;
        if (currentQuestion.toLowerCase().includes(searchedQuestion.toLowerCase())) {
          searchedQuestionArr.push(allQuestions[i]);
          console.log(searchedQuestionArr, 'searchedQuestionArr is?');
        }
      }
      console.log('these questions are getting searched', searchedQuestionArr);
      setQuestionsList(searchedQuestionArr);
    }
  };

  return (
    <div>
      <h1>Questions</h1>
      <div className="question-list">
        <QuestionSearch handleSearch={searchingQuestion} />
        <QuestionEntry questions={questionsList} currentProductId={currentProduct} />
      </div>
      {listCount > questionsList.length ? <CollapseQuestionButton />
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
