import React, { useState, useEffect } from 'react';
import './addAnswer.css';
import axios from 'axios';
import AnswerErrorMessage from './AnswerErrorMessage.jsx';
import CloudinaryWidget from '../../common/CloudinaryWidget.jsx';

const serverRoute = `http://localhost:${process.env.PORT}`;
const validateError = require('./validateError');

function AddQuestionModal({ closeModal, question, currentProductId }) {
  console.log(currentProductId, 'current123', question);

  const [imageUrls, setImageUrls] = useState([]);
  const [productName, setProductName] = useState('');
  const [newAnswer, setNewAnswer] = useState({
    body: '',
    name: '',
    email: '',
    photos: imageUrls,
    question_id: question.question_id,
  });

  const [errors, setErrors] = useState(null);

  const verifyErrors = () => {
    const errorStrings = [];
    if (!validateError.validateAnswer(newAnswer.body)) {
      errorStrings.push('Please enter a valid answer longer than 50 characters');
    }
    if (!validateError.validateNickname(newAnswer.name)) {
      errorStrings.push('Please enter a valid nickname');
    }
    if (!validateError.validateEmail(newAnswer.email)) {
      errorStrings.push('Please enter a valid email');
    }
    if (!validateError.validatePhotos(newAnswer.photos)) {
      errorStrings.push('Please enter valid photo(s)');
    }
    setErrors(errorStrings);
    return errorStrings.length === 0;
  };

  useEffect(() => {
    axios.get(`${serverRoute}/products/${currentProductId}`)
      .then((result) => {
        setProductName(result.data.name);
      });
  }, [currentProductId]);

  useEffect(() => {
    setNewAnswer({
      ...newAnswer,
      photos: imageUrls,
    });
  }, [imageUrls]);

  const typing = (event) => {
    event.preventDefault();
    setNewAnswer((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log('submitForm working?', newAnswer);
    if (verifyErrors()) {
      axios.post(`${serverRoute}/qa/questions/${question.question_id}/answers`, newAnswer)
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
        <div className="modalTitle">Submit your Answer</div>
        <div className="modalSubtitle">
          {productName}
          {': '}
          {question.question_body}
        </div>
        <form onSubmit={submitForm}>
          <label className="modalAnswer">
            <span className="modalAnswerLabel">
              *Answer:
            </span>
            <textarea cols="48" rows="8" name="body" type="text" maxLength="1000" placeholder="Enter your question here..." required="" value={newAnswer.body} className="answerTextBox" onChange={typing} />
          </label>
          <label className="modalAnswer">
            *Nickname:
            <input className="answerOtherInputs" name="name" type="text" maxLength="60" placeholder="Example: jack543!" required="" value={newAnswer.name} onChange={typing} />
          </label>
          <small className="authenticationMessage">For authentication reasons, do not use your full name or email address</small>
          <label className="modalAnswer">
            *Email:
            <input className="answerOtherInputs" name="email" type="email" maxLength="60" placeholder="jack@email.com" required="" value={newAnswer.email} onChange={typing} />
          </label>
          <small className="authenticationMessage">For authentication reasons, you will not be emailed</small>
          <label className="modalSubtitle">
            Photos:
            <div className="insertPhoto">
              <CloudinaryWidget setImageUrls={setImageUrls} />
            </div>
            {/* <input name="photos" type="array" maxLength="1000" placeholder="example@example.com" value={newAnswer.photos} onChange={typing} /> */}
          </label>
          <div className="submit-button-answer">
            <button className="general-button answerModalSubmit">Submit</button>
            {errors ? <AnswerErrorMessage errors={errors} /> : null}
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
