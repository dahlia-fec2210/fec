import React from 'react';

export default function NicknameInput({ setNickname }) {
  const handleChange = (e) => {
    e.preventDefault();
    setNickname(e.target.value);

    if (e.target.value !== '') {
      e.target.classList.add('hasValue');
    } else {
      e.target.classList.remove('hasValue');
    }
  };

  return (
    <div className="review-form-input nickname-input-container">
      <input
        id="nickname"
        className="review-form-element-input"
        type="input"
        placeholder="Example: jackson11!"
        onChange={handleChange}
        maxLength="60"
      />
      <div className="review-form-element-bar" />
      <label className="review-form-element-label" htmlFor="nickname">Name</label>
      <small className="review-form-element-hint">For privacy reasons, do not use your full name or email address</small>
    </div>
  );
}
