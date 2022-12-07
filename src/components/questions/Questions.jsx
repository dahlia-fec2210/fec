/* eslint-disable prefer-const */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionEntry from './QuestionEntry.jsx';
import LoadQuestionButton from './LoadQuestionButton.jsx';

const serverRoute = `http://localhost:${process.env.PORT}`;

function Questions({ currentProduct }) {
  const [allQuestions, setAllQuestions] = useState([]);
  const [questionsList, setQuestionsList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [page, setPage] = useState(1);
  const [listCount, setListCount] = useState(null);

  // let fetchQuestions = (allQuestionData, countInt) => {
  //   // axios.get(`${serverRoute}/qa/questions`, {
  //   //   params: {
  //   //     product_id: productId,
  //   //     page: pageNumber,
  //   //     count: countNumber,
  //   //   },
  //   // });
  //   let currentQuestions = [];
  //   console.log(allQuestionData, countInt, 'fetchQuestions');
  //   for (let i = 0; i < countInt; i++) {
  //     currentQuestions.push(allQuestionData[i]);
  //   }
  //   console.log(currentQuestions, '010101010');
  //   setQuestions(currentQuestions);
  // };
  //   // .then((result) => {
  //   //   console.log(result, '123123');
  //   // });
  // const loadQuestions = (newAllQuestions) => {
  //   console.log(allQuestions, 'loadQuestions');
  //   const newCountNum = countNum + 2;
  //   setCountNum(newCountNum);
  //   fetchQuestions(newAllQuestions, newCountNum);
  //   // const newPage = page + 1;
  //   // setPage(newPage);
  //   // setCount(count + 2);
  //   // fetchQuestions(currentProduct, newPage, 2)
  //   //   .then((results) => {
  //   //     console.log(results.data.results, 'testing in line 32');
  //   //     setQuestions([...questions, ...results.data.results]);
  //   //   });
  // };

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
    },
  })
    .then((response) => {
      const questionsArr = [...response.data.results].sort(compareFn);
      setAllQuestions(questionsArr);
      setIsLoading(false);
      return questionsArr;
    });

  useEffect(() => {
    fetchAllQuestions()
      .then((questionsArr) => {
        setQuestionsList(questionsArr.slice(0, 2));
        setListCount(2);
      });
  }, []);

  // useEffect(() => {
  //   const newAllQuestions = [...allQuestions];
  //   newAllQuestions.sort(compareFn);
  //   setAllQuestions(newAllQuestions);
  //   loadQuestions(newAllQuestions);
  //   // setQuestions(allQuestions);
  //   console.log(allQuestions, 'second useEffect');
  // }, [allQuestions]);

  // let content;
  // if (isLoading) {
  //   content = <div className="QuestionLoading">Loading...</div>;
  // } else {
  //   content = (
  //     questionsList.map((individualQ, index) => <QuestionEntry key={index} question={individualQ} />)
  //   );
  // }

  return (
    <div>
      <h1>Questions</h1>
      {questionsList && questionsList.map((individualQ, index) => <QuestionEntry key={index} question={individualQ} />)}
      {listCount > allQuestions.length ? null
        : <LoadQuestionButton /* handleClick={loadQuestions} */ />}
    </div>
  );
}

export default Questions;
