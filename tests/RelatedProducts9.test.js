/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import Photo from '../src/components/relatedItems/Photo.jsx';

function changeProduct(event) {
  event.preventDefault();
  setCurrentProduct(product);
  axios.post(`${serverRoute}/interactions`, { element: `related-product-change-button:${product}`, widget: 'Related Products', time: new Date().toTimeString() });
}

const productData = {
  photos: ['https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'],
  thumbnails: ['https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'],
  price: 900.00,
  salePrice: null,
};

test('renders photo for outfit list card with product 37315', async () => {
  const tree = renderer
    .create(<Photo product={37311} productData={productData} changeProduct={changeProduct} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
