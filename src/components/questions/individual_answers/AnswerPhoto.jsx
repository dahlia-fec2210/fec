import React from 'react';
import dateFormat from 'dateformat';
import './individual_answers.css';

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
    // <span>
    //   {`${user} - ${dateFormat(date, 'mmmm d, yyyy ')}`}
    // </span>
  );
}

export default AnswerSubmitInfo;
