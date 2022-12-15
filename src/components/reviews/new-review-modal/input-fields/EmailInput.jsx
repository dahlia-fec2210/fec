import React from 'react';

export default function EmailInput({ setEmail }) {
  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);

    if (e.target.value !== '') {
      e.target.classList.add('hasValue');
    } else {
      e.target.classList.remove('hasValue');
    }
  };

  return (
    <div className="review-form-input">
      <input
        id="email"
        className="review-form-element-input"
        type="input"
        placeholder="Example: jackson11@email.com"
        onChange={handleChange}
        maxLength="60"
      />
      <div className="review-form-element-bar" />
      <label className="review-form-element-label" htmlFor="email">Email</label>
      <small className="review-form-element-hint">For authentication reasons only. You will not be emailed</small>
    </div>
  );
}
