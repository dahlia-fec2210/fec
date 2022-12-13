/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProduct from './RelatedProduct.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import OutfitList from '../outfitList/OutfitList.jsx';

const serverRoute = `http://localhost:${process.env.PORT}`;

function RelatedItems({
  currentProduct, setCurrentProduct,
}) {
  const [left, setLeft] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const [productData, setProductData] = useState({});
  const [averages, setAverages] = useState({});

  useEffect(() => {
    setLeft(0);
    const cache = JSON.parse(localStorage.getItem('relatedProducts')) || {};
    if (!cache[currentProduct]) {
      axios.get(`${serverRoute}/products/${currentProduct}/related`)
        .then((data) => {
          const uniqueProducts = [];
          const products = data.data;
          products.forEach((product) => {
            if (!uniqueProducts.includes(product) && product !== currentProduct) {
              uniqueProducts.push(product);
            }
          });
          setRelatedProducts(uniqueProducts);
          setLeft(0);
          cache[currentProduct] = uniqueProducts;
          localStorage.setItem('relatedProducts', JSON.stringify(cache));
        });
    } else {
      setRelatedProducts(cache[currentProduct]);
    }
  }, [currentProduct]);

  function shiftRight(event) {
    event.preventDefault();
    setLeft(left + 272);
    axios.post(`${serverRoute}/interactions`, { element: event.target.id, widget: 'Related Products', time: new Date().toTimeString() });
  }

  function shiftLeft(event) {
    event.preventDefault();
    event.preventDefault();
    setLeft(left - 272);
    axios.post(`${serverRoute}/interactions`, { element: event.target.id, widget: 'Related Products', time: new Date().toTimeString() });
  }

  if (relatedProducts.length > 0) {
    return (
      <div>
        <div className="related-container">
          <h4 className="related-heading">Related Products</h4>
          <div className="related-carousel">
            { relatedProducts.length > 0 ? (
              relatedProducts.map((product, index) => (
                <RelatedProduct
                  setOpenModal={setOpenModal}
                  setModalProduct={setModalProduct}
                  relatedProducts={relatedProducts}
                  currentProduct={currentProduct}
                  setCurrentProduct={setCurrentProduct}
                  key={index}
                  left={left}
                  product={product}
                  productData={productData}
                  setProductData={setProductData}
                  averages={averages}
                  setAverages={setAverages}
                />
              ))

            ) : null}
          </div>
          <div className="related-arrows">
            <span className="related-arrow related-arrow-left" onClick={shiftLeft}>{ left === 0 ? null : <i id="related-products-carousel-left-arrow" className="related-icon fa-solid fa-chevron-left fa-2xl" />}</span>
            <span className="related-arrow related-arrow-right" onClick={shiftRight}>{ left >= (relatedProducts.length - 4) * 272 ? null : <i id="related-products-carousel-right-arrow" className="related-icon fa-solid fa-chevron-right fa-2xl" />}</span>
          </div>
        </div>

        {openModal && (
        <ComparisonModal
          modalProduct={modalProduct}
          currentProduct={currentProduct}
          setOpenModal={setOpenModal}
        />
        )}
        <OutfitList
          currentProduct={currentProduct}
          averages={averages}
          setAverages={setAverages}
        />
      </div>
    );
  }
  return null;
}

export default RelatedItems;
