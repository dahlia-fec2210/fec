/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import ClothingPiece from './ClothingPiece.jsx';

function OutfitList({
  currentProduct, averages, setAverages,
}) {
  const [outfit, setOutfit] = useState([]);
  const [carousel, setCarousel] = useState([0, 1, 2]);

  useEffect(() => {
    const cache = JSON.parse(localStorage.getItem('outfit'));
    if (cache !== null) {
      setOutfit(cache);
    }
  }, [carousel]);

  useEffect(() => {
    setCarousel([0, 1, 2]);
  }, [currentProduct]);

  function addProduct(event) {
    event.preventDefault();
    const newOutfit = [...outfit];
    if (!newOutfit.includes(currentProduct)) {
      newOutfit.push(currentProduct);
    }
    setOutfit(newOutfit);
    localStorage.setItem('outfit', JSON.stringify(newOutfit));
  }

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

  return (
    <div>
      <div className="related-container">
        <h4 className="related-heading">Your Outfit</h4>
        <div className="related-carousel">
          <div className="related-product-card related-add-card">
            <div className="related-add-outfit-heading">Add to Outfit</div>
            <div className="related-stack" onClick={addProduct}>
              <div className="fa-stack" style={{ verticalAlign: 'top' }}>
                <i className="related-circle fa-solid fa-regular fa-circle fa-stack-2x" />
                <i className="related-star fa-solid fa-plus fa-stack-1x" />
              </div>
            </div>
          </div>
          { outfit.length > 0 && (
          <ClothingPiece
            clothingPiece={outfit[carousel[0]]}
            outfit={outfit}
            setOutfit={setOutfit}
            averages={averages}
            setAverages={setAverages}
          />
          ) }
          { outfit.length > 1 && (
          <ClothingPiece
            clothingPiece={outfit[carousel[1]]}
            outfit={outfit}
            setOutfit={setOutfit}
            averages={averages}
            setAverages={setAverages}
          />
          ) }
          { outfit.length > 2 && (
          <ClothingPiece
            clothingPiece={outfit[carousel[2]]}
            outfit={outfit}
            setOutfit={setOutfit}
            averages={averages}
            setAverages={setAverages}
          />
          ) }

        </div>
        <div className="related-arrows">
          <div className="related-arrow related-arrow-left" onClick={shiftDown}>{ carousel[0] === 0 ? null : <i className="related-icon fa-solid fa-chevron-left fa-2xl" /> }</div>
          <div className="related-arrow related-arrow-right" onClick={shiftUp}>{ carousel[2] === outfit.length - 1 ? null : <i className="related-icon fa-solid fa-chevron-right fa-2xl" /> }</div>
        </div>
      </div>

    </div>

  );
}

export default OutfitList;
