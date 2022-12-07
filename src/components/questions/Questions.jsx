import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionEntry from './QuestionEntry.jsx';

const serverRoute = `http://localhost:${process.env.PORT}`;

function Questions({ currentProduct }) {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setLoading] = useState(true);

<<<<<<< HEAD
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

    // const newPage = page + 1;
    // setPage(newPage);
    // setCount(count + 2);
    // fetchQuestions(currentProduct, newPage, 2)
    //   .then((results) => {
    //     console.log(results.data.results, 'testing in line 32');
    //     setQuestions([...questions, ...results.data.results]);
    //   });
  };
=======
  // console.log(currentProducts, 'outside useEffect');
>>>>>>> parent of f84abd5 (currently working on buttons)

  useEffect(() => {
    // if (currentProduct !== null) {
    axios.get(`${serverRoute}/qa/questions`, {
      params: {
        product_id: currentProduct,
      },
    })
      .then((response) => {
        const questionsArr = response.data.results;
        console.log(response, 'in response');
        setQuestions(questionsArr);
        setLoading(false);
      });
    // }
  }, []);

<<<<<<< HEAD
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
    setQuestions(allQuestions);
    console.log(allQuestions, 'second useEffect');
  }, [allQuestions]);

=======
>>>>>>> parent of f84abd5 (currently working on buttons)
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
    </div>
  );
}

export default Questions;
