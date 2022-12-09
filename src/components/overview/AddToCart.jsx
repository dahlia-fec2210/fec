import React from 'react';
import SizeOptions from './SizeOptions.jsx';

function AddToCart({ currentStyleSkus }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <select>
        <option value="">SELECT SIZE</option>
        {Object.values(currentStyleSkus).map((sku, i) => (
          <SizeOptions key={i} size={sku.size} />
        ))}
      </select>
      <select>
        <option value="">1</option>
      </select>
      <button type="submit">Add to Cart/Bag</button>
    </form>
  );
}

export default AddToCart;
