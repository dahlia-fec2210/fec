/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProduct from './RelatedProduct.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import OutfitList from '../OutfitList/OutfitList.jsx';
import './related.css';

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
  const [carousel, setCarousel] = useState([0, 1, 2, 3]);

  useEffect(() => {
    setCarousel([0, 1, 2, 3]);
  }, [currentProduct]);

  useEffect(() => {
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

  function shiftUp(event) {
    event.preventDefault();
    const newCarousel = carousel.map((index) => index + 1);
    console.log(newCarousel);
    setCarousel(newCarousel);
  }

  function shiftDown(event) {
    event.preventDefault();
    const newCarousel = carousel.map((index) => index - 1);
    console.log(newCarousel);
    setCarousel(newCarousel);
  }

  if (relatedProducts.length > 0) {
    return (
      <div>
        <div className="related-container">
          <h4 className="related-heading">Related Products</h4>
          <div className="related-carousel">
            { relatedProducts[carousel[0]] ? (
              <RelatedProduct
                setOpenModal={setOpenModal}
                setModalProduct={setModalProduct}
                relatedProducts={relatedProducts}
                setCurrentProduct={setCurrentProduct}
                left={left}
                product={relatedProducts[carousel[0]]}
                productData={productData}
                setProductData={setProductData}
                averages={averages}
                setAverages={setAverages}
              />
            ) : null}
            { relatedProducts[carousel[1]] ? (
              <RelatedProduct
                setOpenModal={setOpenModal}
                setModalProduct={setModalProduct}
                relatedProducts={relatedProducts}
                setCurrentProduct={setCurrentProduct}
                left={left}
                product={relatedProducts[carousel[1]]}
                productData={productData}
                setProductData={setProductData}
                averages={averages}
                setAverages={setAverages}
              />
            ) : null}
            { relatedProducts[carousel[2]]
              ? (
                <RelatedProduct
                  setOpenModal={setOpenModal}
                  setModalProduct={setModalProduct}
                  relatedProducts={relatedProducts}
                  setCurrentProduct={setCurrentProduct}
                  left={left}
                  product={relatedProducts[carousel[2]]}
                  productData={productData}
                  setProductData={setProductData}
                  averages={averages}
                  setAverages={setAverages}
                />
              ) : null }
            {relatedProducts[carousel[3]]
              ? (
                <RelatedProduct
                  setOpenModal={setOpenModal}
                  setModalProduct={setModalProduct}
                  relatedProducts={relatedProducts}
                  setCurrentProduct={setCurrentProduct}
                  left={left}
                  product={relatedProducts[carousel[3]]}
                  productData={productData}
                  setProductData={setProductData}
                  averages={averages}
                  setAverages={setAverages}
                />
              ) : null }

          </div>
          <div className="related-arrows">
            <span className="related-arrow related-arrow-left" onClick={shiftDown}>{ carousel[0] === 0 ? <span /> : <i className="related-icon fa-solid fa-chevron-left fa-2xl" /> }</span>
            <span className="related-arrow related-arrow-right" onClick={shiftUp}>{ (carousel[3] === relatedProducts.length - 1 || relatedProducts.length < 4) ? <span /> : <i className="related-icon fa-solid fa-chevron-right fa-2xl" /> }</span>
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
