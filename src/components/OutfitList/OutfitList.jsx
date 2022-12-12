/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClothingPiece from './ClothingPiece.jsx';

const serverRoute = `http://localhost:${process.env.PORT}`;

function OutfitList({
  currentProduct, averages, setAverages,
}) {
  const [outfit, setOutfit] = useState([]);
  const [left, setLeft] = useState(0);

  useEffect(() => {
    const cache = JSON.parse(localStorage.getItem('outfit'));
    if (cache !== null) {
      setOutfit(cache);
    }
  }, []);

  function addProduct(event) {
    event.preventDefault();
    const newOutfit = [...outfit];
    if (!newOutfit.includes(currentProduct)) {
      newOutfit.push(currentProduct);
    }
    setOutfit(newOutfit);
    axios.post(`${serverRoute}/interactions`, { element: `outfit-list-add-button:${currentProduct}`, widget: 'Related Products', time: new Date().toTimeString() });
    localStorage.setItem('outfit', JSON.stringify(newOutfit));
  }

  function shiftRight(event) {
    event.preventDefault();
    setLeft(left + 272);
    axios.post(`${serverRoute}/interactions`, { element: event.target.id, widget: 'Related Products', time: new Date().toTimeString() });
  }

  function shiftLeft(event) {
    event.preventDefault();
    setLeft(left - 272);
    axios.post(`${serverRoute}/interactions`, { element: event.target.id, widget: 'Related Products', time: new Date().toTimeString() });
  }

  return (
    <div>
      <div className="related-container">
        <h4 className="related-heading">Your Outfit</h4>
        <div className="outfit-row">
          <div className="related-add-card">
            <div className="related-add-outfit-heading">Add to Outfit</div>
            <div className="related-stack" onClick={addProduct}>
              <div className="fa-stack" style={{ verticalAlign: 'top' }}>
                <i className="related-circle fa-solid fa-regular fa-circle fa-stack-2x" />
                <i className="related-star fa-solid fa-plus fa-stack-1x" />
              </div>
            </div>
          </div>
          <div className="outfit-carousel">
            { outfit.length > 0 && (
              outfit.map((clothingPiece, index) => (
                <ClothingPiece
                  clothingPiece={clothingPiece}
                  outfit={outfit}
                  setOutfit={setOutfit}
                  averages={averages}
                  setAverages={setAverages}
                  key={index}
                  left={left}
                />
              ))

            ) }
          </div>
        </div>
        <div className="related-arrows">
          <div className="related-arrow related-arrow-left" onClick={shiftLeft}>{ left === 0 ? null : <i id="outfit-list-carousel-left-arrow" className="related-icon fa-solid fa-chevron-left fa-2xl" /> }</div>
          <div className="related-arrow related-arrow-right" onClick={shiftRight}>{ left >= (outfit.length - 3) * 272 ? null : <i id="outfit-list-carousel-right-arrow" className="related-icon fa-solid fa-chevron-right fa-2xl" /> }</div>
        </div>
      </div>

    </div>

  );
}

export default OutfitList;
