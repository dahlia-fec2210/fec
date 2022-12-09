import React from 'react';

export default function SummaryInput({ summary, setSummary }) {
  const handleChange = (e) => {
    e.preventDefault();
    setSummary(e.target.value);
  };

  return (

    <div className="summary-input-container">
      <label className="summary-label" htmlFor="summary">
        Summary:
        {' '}
        <input
          type="text"
          id="summary"
          maxLength={60}
          className="summary-input"
          placeholder="Example: Best purchase ever!"
          value={summary}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
