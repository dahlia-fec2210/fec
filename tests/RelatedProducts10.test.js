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
  photos: ['photo-1', 'photo-2', 'photo-3', 'photo-4', 'photo-5'],
  thumbnails: ['photo-1', 'photo-2', 'photo-3', 'photo-4', 'photo-5'],
  price: 900.00,
  salePrice: null,
};

test('renders related products and outfit list with 37311', async () => {
  const user = userEvent.setup();
  render(<Photo product={37311} productData={productData} changeProduct={changeProduct} />);
  user.click(screen.getByTestId('mini-right-arrow'))
    .then(() => {
      expect(screen.getByAltText('thumbnail').src).toContain('photo-5');
      user.click(screen.getByTestId('thumbnail'))
        .then(() => {
          expect(screen.getByAltText('37311').src).toContain('photo-2');
        });
    });
});
