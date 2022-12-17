import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import AddToCart from '../src/components/overview/AddToCart.jsx';

const currentStyleSkus = {
  1281037: { quantity: 4, size: 'XL' },
  1281033: { quantity: 4, size: 'XL' },
  1281034: { quantity: 4, size: 'XL' },
  1281035: { quantity: 4, size: 'XL' },
  1281036: { quantity: 4, size: 'XL' },
};

describe('AddToCart test', () => {
  const user = userEvent.setup();
  it('should render the current style skus', () => {
    render(<AddToCart currentStyleSkus={currentStyleSkus} />);
    screen.debugger;
    expect(screen.getByTestId('cart-test')).toHaveTextContent('Add to Cart');
  });
});
