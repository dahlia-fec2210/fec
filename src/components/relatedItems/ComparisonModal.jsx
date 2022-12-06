/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const serverRoute = `http://localhost:${process.env.PORT}`;

function ComparisonModal({ modalProduct, currentProduct, setOpenModal }) {
  const [modalProductInfo, setModalProductInfo] = useState(null);
  const [currentProductInfo, setCurrentProductInfo] = useState(null);
  const [modalFeatures, setModalFeatures] = useState(null);
  const [currentFeatures, setCurrentFeatures] = useState(null);

  useEffect(() => {
    axios.get(`${serverRoute}/products/${currentProduct}`)
      .then((data) => {
        console.log(data.data);
        setCurrentProductInfo(data.data);
        setCurrentFeatures(data.data.features);
      });
  }, []);

  useEffect(() => {
    axios.get(`${serverRoute}/products/${modalProduct}`)
      .then((data) => {
        console.log(data.data);
        setModalProductInfo(data.data);
        setModalFeatures(data.data.features);
      });
  }, []);

  console.log('CURRENT: ', currentFeatures);
  console.log('MODAL: ', modalFeatures);

  if (currentProductInfo !== null && modalProductInfo !== null) {
    const allFeatures = {};
    currentFeatures.forEach((feature) => {
      if (feature.value) {
        allFeatures[`${feature.feature}: ${feature.value}`] = ['current'];
      } else {
        allFeatures[feature.feature] = ['current'];
      }
    });
    modalFeatures.forEach((feature) => {
      if (feature.value) {
        if (allFeatures[`${feature.feature}: ${feature.value}`]) {
          allFeatures[`${feature.feature}: ${feature.value}`].push('modal');
        } else {
          allFeatures[`${feature.feature}: ${feature.value}`] = ['modal'];
        }
      } else if (allFeatures[feature.feature]) {
        allFeatures[feature.feature].push('modal');
      } else {
        allFeatures[feature.feature] = ['modal'];
      }
    });
    const allFeaturesKeys = Object.keys(allFeatures);
    console.log(allFeaturesKeys);

    return (
      <div className="related-comparison-modal">
        <div className="related-comparison-heading">Comparing</div>
        <div
          className="related-comparison-stack"
          onClick={() => { setOpenModal(false); }}
        >
          <div className="fa-stack" style={{ verticalAlign: 'top' }}>
            <i className="related-circle fa-solid fa-regular fa-circle fa-stack-2x" />
            <i className="related-star fa-solid fa-x fa-stack-1x" />
          </div>
        </div>
        <div className="related-table-container">
          <table className="related-table">
            <thead>
              <tr>
                <th scope="col">{modalProductInfo.name}</th>
                <th scope="col">Characteristics</th>
                <th scope="col">{currentProductInfo.name}</th>
              </tr>
            </thead>
            <tbody>
              {allFeaturesKeys.map((key) => {
                if (allFeatures[key].includes('modal') && allFeatures[key].includes('current')) {
                  console.log(key, 'MODAL');
                  return (
                    <tr key={key}>
                      <td>✅</td>
                      <td>{key}</td>
                      <td>✅</td>
                    </tr>
                  );
                } if (allFeatures[key].includes('current') && !allFeatures[key].includes('modal')) {
                  return (
                    <tr key={key}>
                      <td />
                      <td>{key}</td>
                      <td>✅</td>
                    </tr>
                  );
                } if (!allFeatures[key].includes('current') && allFeatures[key].includes('modal')) {
                  return (
                    <tr key={key}>
                      <td>✅</td>
                      <td>{key}</td>
                      <td />
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  return (
    <div className="related-comparison-modal">Loading..</div>
  );
}

export default ComparisonModal;
