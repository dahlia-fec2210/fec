import React from 'react';

export default function EmailInput({ email, setEmail }) {
  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  return (

    <div className="email-input-container">
      <label className="email-label" htmlFor="email">
        Email:
        <input
          type="text"
          id="email"
          className="email-input"
          placeholder="Example: jackson11@email.com"
          value={email}
          onChange={handleChange}
        />
      </label>
      <div className="email-input-tag">For authentication reasons only. You will not be emailed</div>
    </div>
  );
}
