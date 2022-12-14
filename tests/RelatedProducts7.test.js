/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Price from '../src/components/relatedItems/Price.jsx';

test('renders price component', async () => {
  render(<Price price={100} salePrice={50} />);
  expect(screen.getByTestId('sale-price')).toHaveTextContent('50');
});
