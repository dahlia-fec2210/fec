import React from 'react';
// import './individual_answers.css';

function AnswerSubmitInfo({ answer }) {
  return (
    <div className="answer-thumbnails">
      {answer.photos.map((photo) => (
        <img
          className="answer-photo-thumbnail"
          src={photo.url}
          key={photo.id}
        />
      ))}
    </div>
  );
}

export default AnswerSubmitInfo;
