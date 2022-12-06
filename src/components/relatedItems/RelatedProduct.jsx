/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const serverRoute = `http://localhost:${process.env.PORT}`;

function RelatedProduct({ product, left }) {
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    axios.get(`${serverRoute}/products/${product}`)
      .then((data) => {
        console.log(data.data);
        setProductInfo(data.data);
      });
  }, []);

  if (productInfo !== null) {
    return (
      <div>
        <div className="related-product-card" style={{ left }}>
          <div>{productInfo.name}</div>
        </div>
      </div>
    );
  }
  return (
    <div>Loading...</div>
  );
}

export default RelatedProduct;
