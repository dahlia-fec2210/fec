import React, { useState } from 'react';
import CloudinaryWidget from '../../common/CloudinaryWidget.jsx';
import NicknameInput from './input-fields/NicknameInput.jsx';
import EmailInput from './input-fields/EmailInput.jsx';
import SelectOverallRating from './input-fields/SelectOverallRating.jsx';
import SelectRecommend from './input-fields/SelectRecommend.jsx';
import CharacteristicsInput from './input-fields/CharacteristicsInput.jsx';

export default function NewReviewModal({ toggleModal, metaData }) {
  const [imageUrls, setImageUrls] = useState([]);
  const [formData, setFormData] = useState({});
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const [overallRating, setOverallRating] = useState(null);
  const [recommend, setRecommend] = useState(null);
  const [characteristics, setCharacteristics] = useState({});
  const [reviewSummary, setReviewSummary] = useState('');
  const [reviewBody, setReviewBody] = useState('');

  return (

    <div className="review-modal">
      <div className="review-overlay" />
      <div className="review-modal-content">
        <i className="fa-solid fa-xmark review-close-modal" onClick={toggleModal} />
        <NicknameInput nickname={nickname} setNickname={setNickname} />
        <EmailInput email={email} setEmail={setEmail} />
        <SelectOverallRating
          overallRating={overallRating}
          setOverallRating={setOverallRating}
        />
        <SelectRecommend setRecommend={setRecommend} />
        <CharacteristicsInput
          characteristics={characteristics}
          setCharacteristics={setCharacteristics}
          metaData={metaData}
        />
        <CloudinaryWidget
          setImageUrls={setImageUrls}
        />
      </div>
    </div>
  );
}

/*
needs:
 name
 email
 overall rating
 do you recommend product?
 characteristics
 review summary
 review body
 upload photos
 submit button
*/

// product_id
// :
// "37317"

// ratings
// :
// {1: "2", 2: "1", 3: "11", 4: "4", 5: "42"}

// recommended
// :
// {false: "2", true: "58"}

// characteristics
// :
// {Comfort: {…}, Quality: {…}, Size
