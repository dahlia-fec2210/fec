import React from 'react';

export default function Thumbnails({ thumbnailUrls }) {
  return (
    <div className="upload-thumbnails-container">
      {thumbnailUrls.map((thumbnailUrl) => (
        <div className="uploaded-thumbnail" key={thumbnailUrl}>
          <img src={thumbnailUrl} alt="uploaded thumbnail" />
        </div>
      ))}
    </div>
  );
}
