/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProduct from './RelatedProduct.jsx';

const serverRoute = `http://localhost:${process.env.PORT}`;

function RelatedItems({ currentProduct }) {
  const [left, setLeft] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    axios.get(`${serverRoute}/products/${currentProduct.id}/related`)
      .then((data) => {
        setRelatedProducts(data.data);
      });
  }, []);

  function moveRight(event) {
    event.preventDefault();
    setLeft(left + 272);
  }

  function moveLeft(event) {
    event.preventDefault();
    setLeft(left - 272);
  }

  return (
    <div className="related-container">
      <h4 className="related-heading">Related Products</h4>
      <div className="related-carousel">
        {relatedProducts.map((product) => (
          <RelatedProduct
            left={left}
            key={product}
            product={product}
          />
        ))}
      </div>
      <div className="related-buttons">
        <div onClick={moveRight}>{ left === 0 ? null : <i className="fa-solid fa-chevron-left fa-2xl" /> }</div>
        <div onClick={moveLeft}>{ left <= ((relatedProducts.length - 4) * -272) ? null : <i className="fa-solid fa-chevron-right fa-2xl" /> }</div>
      </div>
    </div>
  );
}

export default RelatedItems;
