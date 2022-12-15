import React from 'react';

export default function SummaryInput({ setSummary }) {
  const handleChange = (e) => {
    e.preventDefault();
    setSummary(e.target.value);

    if (e.target.value !== '') {
      e.target.classList.add('hasValue');
    } else {
      e.target.classList.remove('hasValue');
    }
  };

  return (

    // <div className="summary-input-container">
    //   <label className="summary-label" htmlFor="summary">
    //     Summary:
    //     {' '}
    //     <input
    //       type="text"
    //       id="summary"
    //       maxLength={60}
    //       className="summary-input"
    //       placeholder="Example: Best purchase ever!"
    //       value={summary}
    //       onChange={handleChange}
    //     />
    //   </label>
    // </div>
    <div className="review-form-input">
      <input
        id="summary"
        className="review-form-element-input"
        type="input"
        placeholder="Example: Best purchase ever!"
        onChange={handleChange}
        maxLength="60"
      />
      <div className="review-form-element-bar" />
      <label className="review-form-element-label" htmlFor="summary">Summary: (Optional)</label>
    </div>
  );
}
