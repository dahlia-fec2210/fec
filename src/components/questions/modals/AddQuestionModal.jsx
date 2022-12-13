import React, { useState, useEffect } from 'react';
import './addQuestion.css';
import axios from 'axios';
import QuestionErrorMessage from './QuestionErrorMessage.jsx';

const serverRoute = `http://localhost:${process.env.PORT}`;
const validateError = require('./validateError');

function AddQuestionModal({ closeModal, currentProductId }) {
  console.log(currentProductId, 'current');

  const [productName, setProductName] = useState('');
  const [newQuestion, setNewQuestion] = useState({
    body: '',
    name: '',
    email: '',
    product_id: currentProductId,
  });

  const [errors, setErrors] = useState(null);

  const verifyErrors = () => {
    const errorStrings = [];
    if (!validateError.validateQuestion(newQuestion.body)) {
      errorStrings.push('Please enter a valid question longer than 50 characters');
    }
    if (!validateError.validateNickname(newQuestion.name)) {
      errorStrings.push('Please enter a valid nickname');
    }
    if (!validateError.validateEmail(newQuestion.email)) {
      errorStrings.push('Please enter a valid email');
    }
    setErrors(errorStrings);
    return errorStrings.length === 0;
  };

  useEffect(() => {
    axios.get(`/products/${currentProductId}`)
      .then((result) => {
        setProductName(result.data.name);
      });
  }, [currentProductId]);

  const typing = (event) => {
    event.preventDefault();
    setNewQuestion((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log('submitForm working?', {
      params: {
        newQuestion,
      },
    });
    if (verifyErrors()) {
      axios.post('/qa/questions/', newQuestion)
        .then((result) => console.log(result));
    }
  };

  return (
    // <div>
    //   Testing123
    // </div>
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="modalTitle">Ask Your Question</div>
        <div className="modalSubtitle">
          About the
          {' '}
          {productName}
          {' '}
        </div>
        <form onSubmit={submitForm}>
          <label className="modalAnswer">
            <span className="modalAnswerLabel">
              *Question:
            </span>
            <textarea className="answerTextBox" cols="48" rows="8" name="body" type="text" maxLength="1000" placeholder="Enter your question here..." required="" value={newQuestion.question} onChange={typing} />
          </label>
          <label className="modalAnswer">
            *Nickname:
            <input className="answerOtherInputs" name="name" type="text" maxLength="60" placeholder="Example: jackson11!" required="" value={newQuestion.nickname} onChange={typing} />
          </label>
          <small className="authenticationMessage">For authentication reasons, you will not be emailed</small>
          <label className="modalAnswer">
            Email:
            <input className="answerOtherInputs" name="email" type="email" maxLength="60" placeholder="example@example.com" required="" value={newQuestion.email} onChange={typing} />
          </label>
          <div className="submit-button-answer">
            <button className="general-button answerModalSubmit">Submit</button>
            {errors ? <QuestionErrorMessage errors={errors} /> : null}
          </div>
        </form>
        {/* <textarea className="question" placeholder="Enter your question here..." />
        <textarea className="nickname" placeholder="Example: jackson11!" />
        <div>For authentication reasons, you will not be emailed</div>
        <textarea className="email" placeholder="example@example.com" />
        <button> Submit</button> */}
      </div>
    </div>
  );
}

export default AddQuestionModal;
