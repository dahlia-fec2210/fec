import React from 'react';

function SellerResponse({ response }) {
  return (
    <div className="reviews-seller-response">
      <div className="reviews-response-label">Response:</div>
      <div className="reviews-response">{response}</div>
    </div>
  );
}

export default SellerResponse;
