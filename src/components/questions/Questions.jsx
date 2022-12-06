import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionEntry from './QuestionEntry.jsx';

const serverRoute = `http://localhost:${process.env.PORT}`;

function Questions({ currentProduct }) {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setLoading] = useState(true);

  // console.log(currentProducts, 'outside useEffect');

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
