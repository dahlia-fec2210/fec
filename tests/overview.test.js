import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import AddToCart from '../src/components/overview/AddToCart.jsx';

describe('AddToCart test', () => {
  const user = userEvent.setup();
  it('should render the current style skus', () => {
    render(<AddToCart />);
    screen.debugger;
    expect(screen.getByTestId('cart')).toHaveTextContent('');
  });
});

const currentStyleSkus = {
  1281037: { quantity: 4, size: 'XL' },
  1281033: { quantity: 4, size: 'XL' },
  1281034: { quantity: 4, size: 'XL' },
  1281035: { quantity: 4, size: 'XL' },
  1281036: { quantity: 4, size: 'XL' },
};
