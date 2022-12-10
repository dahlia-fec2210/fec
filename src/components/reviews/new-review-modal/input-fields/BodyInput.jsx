import React from 'react';

export default function BodyInput({ body, setBody }) {
  const handleChange = (e) => {
    e.preventDefault();
    setBody(e.target.value);
  };

  const displayCaption = () => {
    if (body.length < 50) {
      return (
        <div className="body-input-caption">
          Minimum required characters left:
          {' '}
          {50 - body.length}
        </div>
      );
    }
    return (
      <div className="body-input-caption-met">
        Mininum Reached
      </div>
    );
  };

  return (

    <div className="body-input-container">
      <textarea
        type="textarea"
        className="body-input"
        maxLength={1000}
        placeholder="Why did you like the product or not?"

        onChange={handleChange}
      />
      {displayCaption()}
    </div>
  );
}
