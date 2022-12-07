import React from 'react';

function AddToCart() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <select>
        <option value="">SELECT SIZE</option>
      </select>
      <select>
        <option value="">1</option>
      </select>
      <button type="submit">Add to Cart/Bag</button>
    </form>
  );
}

export default AddToCart;
