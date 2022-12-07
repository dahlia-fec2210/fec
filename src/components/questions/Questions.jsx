/* eslint-disable prefer-const */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionEntry from './QuestionEntry.jsx';
import LoadQuestionButton from './LoadQuestionButton.jsx';

const serverRoute = `http://localhost:${process.env.PORT}`;

function Questions({ currentProduct }) {
  const [allQuestions, setAllQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [page, setPage] = useState(1);
  const [countNum, setCountNum] = useState(0);

  console.log(currentProduct, 'currentProduct');

  let fetchQuestions = (allQuestionData, countInt) => {
    // axios.get(`${serverRoute}/qa/questions`, {
    //   params: {
    //     product_id: productId,
    //     page: pageNumber,
    //     count: countNumber,
    //   },
    // });
    let currentQuestions = [];
    console.log(allQuestionData, countInt, 'fetchQuestions');
    for (let i = 0; i < countInt; i++) {
      currentQuestions.push(allQuestionData[i]);
    }
    console.log(currentQuestions, '010101010');
    setQuestions(currentQuestions);
  };
    // .then((result) => {
    //   console.log(result, '123123');
    // });
  const loadQuestions = () => {
    console.log(allQuestions, 'loadQuestions');
    setCountNum(countNum + 2);
    fetchQuestions(allQuestions, countNum);
    // const newPage = page + 1;
    // setPage(newPage);
    // setCount(count + 2);
    // fetchQuestions(currentProduct, newPage, 2)
    //   .then((results) => {
    //     console.log(results.data.results, 'testing in line 32');
    //     setQuestions([...questions, ...results.data.results]);
    //   });
  };

  useEffect(() => {
    // if (currentProduct !== null) {
    console.log('first useeffect');
    axios.get(`${serverRoute}/qa/questions`, {
      params: {
        product_id: currentProduct,
      },
    })
      .then((response) => {
        const questionsArr = response.data.results;
        console.log(response, 'in response');
        setAllQuestions(questionsArr);
        setIsLoading(false);
      });
    // }
  }, []);

  let compareFn = (a, b) => {
    if (a.question_helpfulness > b.question_helpfulness) {
      return -1;
    } if (a.question_helpfulness < b.question_helpfulness) {
      return 1;
    }
    return 0;
  };

  useEffect(() => {
    let newAllQuestions = allQuestions.splice();
    newAllQuestions.sort(compareFn);
    setAllQuestions(newAllQuestions);
    loadQuestions();
    // setQuestions(allQuestions);
    console.log(allQuestions, 'second useEffect');
  }, []);

  let content;
  if (isLoading) {
    content = <div className="QuestionLoading">Loading...</div>;
  } else {
    content = (
      questions.map((individualQ, index) => <QuestionEntry key={index} question={individualQ} />)
    );
  }

  return (
    <div>
      <h1>Questions</h1>
      {content}
      {countNum > allQuestions.length ? null
        : <LoadQuestionButton handleClick={loadQuestions} />}
    </div>
  );
}

export default Questions;
