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

test('renders related products and outfit list with 37311', async () => {
  render(<Photo product={37311} changeProduct={changeProduct} />);
  expect(screen.getByTestId('empty')).toBeVisible();
});
