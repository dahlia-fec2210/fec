import React, { useState, useEffect } from 'react';
import './addQuestion.css';
import axios from 'axios';

const serverRoute = `http://localhost:${process.env.PORT}`;

function AddQuestionModal({ closeModal, currentProductId }) {
  console.log(currentProductId, 'current');

  const [productName, setProductName] = useState('');
  const [newQuestion, setNewQuestion] = useState({
    body: '',
    name: '',
    email: '',
    product_id: currentProductId,
  });

  useEffect(() => {
    axios.get(`${serverRoute}/products/${currentProductId}`)
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
    axios.post(`${serverRoute}/qa/questions/`, newQuestion)
      .then((result) => console.log(result));
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
        <div className="title">Ask Your Question</div>
        <div className="subtitle">
          About the
          {' '}
          {productName}
          {' '}
        </div>
        <form onSubmit={submitForm}>
          <label>
            Question:
            <textarea cols="48" rows="8" name="body" type="text" maxLength="1000" placeholder="Enter your question here..." required="" value={newQuestion.question} onChange={typing} />
          </label>
          <label>
            Nickname:
            <input name="name" type="text" maxLength="60" placeholder="Example: jackson11!" required="" value={newQuestion.nickname} onChange={typing} />
          </label>
          <small>For authentication reasons, you will not be emailed</small>
          <label>
            Email:
            <input name="email" type="email" maxLength="60" placeholder="example@example.com" required="" value={newQuestion.email} onChange={typing} />
          </label>
          <button>Submit</button>
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
