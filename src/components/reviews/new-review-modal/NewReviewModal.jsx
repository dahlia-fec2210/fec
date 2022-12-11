import React, { useState } from 'react';
import axios from 'axios';
import CloudinaryWidget from '../../common/CloudinaryWidget.jsx';
import NicknameInput from './input-fields/NicknameInput.jsx';
import EmailInput from './input-fields/EmailInput.jsx';
import SelectOverallRating from './input-fields/SelectOverallRating.jsx';
import SelectRecommend from './input-fields/SelectRecommend.jsx';
import CharacteristicsInput from './input-fields/CharacteristicsInput.jsx';
import SummaryInput from './input-fields/SummaryInput.jsx';
import BodyInput from './input-fields/BodyInput.jsx';
import ErrorMessage from './ErrorMessage.jsx';

const validate = require('./validate');

const serverRoute = `http://localhost:${process.env.PORT}`;

export default function NewReviewModal({ toggleModal, metaData, currentProduct }) {
  const [imageUrls, setImageUrls] = useState([]);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [overallRating, setOverallRating] = useState(null);
  const [recommend, setRecommend] = useState(null);
  const [characteristics, setCharacteristics] = useState({});
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [errors, setErrors] = useState(null);

  const verifyInputs = () => {
    const errorStrings = [];
    if (!validate.validateNickname(nickname)) {
      errorStrings.push('Please enter a "nickname"');
    }
    if (!validate.validateEmail(email)) {
      errorStrings.push('Please enter a valid email');
    }
    if (!validate.validateRating(overallRating)) {
      errorStrings.push('Please select an overall rating');
    }
    if (!validate.validateRecommend(recommend)) {
      errorStrings.push('Please select a recommendation (Yes/No)');
    }
    if (!validate.validateCharacteristics(characteristics, metaData.characteristics)) {
      errorStrings.push('Please select all options for expected fit');
    }
    if (!validate.validateBody(body)) {
      errorStrings.push('Please enter the minimum characters for your review');
    }
    if (!validate.validatePhotos(imageUrls)) {
      errorStrings.push('Sorry, unable to accept more than 5 images');
    }
    setErrors(errorStrings);
    return errorStrings.length === 0;
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (verifyInputs()) {
      const route = `${serverRoute}/reviews`;
      axios.post(route, {
        summary,
        body,
        recommend,
        email,
        characteristics,
        rating: overallRating,
        name: nickname,
        product_id: currentProduct,
        photos: imageUrls,
      })
        .then(() => {
          toggleModal();
        });
    }
  };

  return (

    <div className="review-modal">
      <div className="review-overlay" />
      <div className="review-modal-content">
        <i className="fa-solid fa-xmark review-close-modal" onClick={toggleModal} />
        <NicknameInput setNickname={setNickname} />
        <EmailInput setEmail={setEmail} />
        <SelectOverallRating
          overallRating={overallRating}
          setOverallRating={setOverallRating}
        />
        <div className="review-fancy">
          <SelectRecommend setRecommend={setRecommend} />
          <CharacteristicsInput
            characteristics={characteristics}
            setCharacteristics={setCharacteristics}
            metaData={metaData}
          />
        </div>
        <SummaryInput setSummary={setSummary} />
        <BodyInput body={body} setBody={setBody} />
        <CloudinaryWidget
          setImageUrls={setImageUrls}
          className="review-upload-button"
        />
        <div className="review-submit-and-errors">
          {errors ? <ErrorMessage errors={errors} /> : null}
          <button className="submit-review-button" type="submit" onClick={submitForm}>Submit Review</button>
        </div>
      </div>
    </div>
  );
}
