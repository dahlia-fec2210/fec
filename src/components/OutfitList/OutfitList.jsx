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
  const [left, setLeft] = useState(0);
  const [outfit, setOutfit] = useState([]);

  useEffect(() => {
    console.log('OUTFIT LIST:', localStorage.getItem('outfit'));
    // setOutfit(JSON.parse(localStorage.getItem('outfit')));
  }, []);

  function moveRight(event) {
    event.preventDefault();
    setLeft(left + 272);
  }

  function moveLeft(event) {
    event.preventDefault();
    setLeft(left - 272);
  }

  function addProduct(event) {
    event.preventDefault();
    const newOutfit = [...outfit];
    if (!newOutfit.includes(currentProduct)) {
      newOutfit.push(currentProduct);
    }
    setOutfit(newOutfit);
    localStorage.setItem('outfit', JSON.stringify(newOutfit));
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
          {
            outfit.length > 0
              ? outfit.map((clothingPiece, index) => (
                <ClothingPiece
                  key={index}
                  clothingPiece={clothingPiece}
                  left={left}
                  outfit={outfit}
                  setOutfit={setOutfit}
                  averages={averages}
                  setAverages={setAverages}
                />
              ))
              : null
          }
        </div>
      </div>
      <div className="related-buttons">
        <div onClick={moveRight}>{ left === 0 ? null : <i className="related-icon fa-solid fa-chevron-left fa-2xl" /> }</div>
        <div onClick={moveLeft}>{ outfit.length <= 3 || left <= ((outfit.length - 3) * -272) ? null : <i className="related-icon fa-solid fa-chevron-right fa-2xl" /> }</div>
      </div>
    </div>

  );
}

export default OutfitList;
