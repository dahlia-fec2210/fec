/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProduct from './RelatedProduct.jsx';
import ComparisonModal from './ComparisonModal.jsx';

const serverRoute = `http://localhost:${process.env.PORT}`;

function RelatedItems({ currentProduct, setCurrentProduct }) {
  const [left, setLeft] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);

  useEffect(() => {
    axios.get(`${serverRoute}/products/${currentProduct}/related`)
      .then((data) => {
        const uniqueProducts = [];
        const products = data.data;
        products.forEach((product) => {
          if (!uniqueProducts.includes(product)) {
            uniqueProducts.push(product);
          }
        });
        setRelatedProducts(uniqueProducts);
        setLeft(0);
      });
  }, [currentProduct]);

  function moveRight(event) {
    event.preventDefault();
    setLeft(left + 272);
  }

  function moveLeft(event) {
    event.preventDefault();
    setLeft(left - 272);
  }
  return (
    <div>
      <div className="related-container">
        <h4 className="related-heading">Related Products</h4>
        <div className="related-carousel">
          {relatedProducts.map((product) => (
            <RelatedProduct
              setOpenModal={setOpenModal}
              setModalProduct={setModalProduct}
              setCurrentProduct={setCurrentProduct}
              left={left}
              key={product}
              product={product}
            />
          ))}
        </div>
      </div>
      <div className="related-buttons">
        <div onClick={moveRight}>{ left === 0 ? null : <i className="related-icon fa-solid fa-chevron-left fa-2xl" /> }</div>
        <div onClick={moveLeft}>{ left <= ((relatedProducts.length - 4) * -272) ? null : <i className="related-icon fa-solid fa-chevron-right fa-2xl" /> }</div>
      </div>
      {openModal && (
      <ComparisonModal
        modalProduct={modalProduct}
        currentProduct={currentProduct}
        setOpenModal={setOpenModal}
      />
      )}
    </div>

  );
}

export default RelatedItems;
