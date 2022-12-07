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
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(2);

  let fetchQuestions = (productId, pageNumber, countNumber) => axios.get(`${serverRoute}/qa/questions`, {
    params: {
      product_id: productId,
      page: pageNumber,
      count: countNumber,
    },
  });
    // .then((result) => {
    //   console.log(result, '123123');
    // });

  const loadQuestions = () => {
    const newPage = page + 1;
    setPage(newPage);
    setCount(count + 2);
    fetchQuestions(currentProduct, newPage, 2)
      .then((results) => {
        console.log(results.data.results, 'testing in line 32');
        setQuestions([...questions, ...results.data.results]);
      });
  };

  useEffect(() => {
    // console.log('testing inside', currentProduct);
    axios.get(`${serverRoute}/qa/questions`, {
      params: {
        product_id: currentProduct,
      },
    })
      .then((response) => {
        let questionArr = response.data.results;
        setAllQuestions(questionArr);
        console.log(questionArr, 'inside useEffect');
      });

    // fetchQuestions(currentProduct, page, count)
    //   .then((response) => {
    //     let questionsArr = response.data.results;
    //     console.log(questionsArr, 'in response 2');
    //     setQuestions(questionsArr);
    //     setIsLoading(false);
    //   });
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
    allQuestions.sort(compareFn);
    console.log(allQuestions, 'second useEffect');
  }, [allQuestions]);

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
      <LoadQuestionButton handleClick={loadQuestions} />
    </div>
  );
}

export default Questions;
