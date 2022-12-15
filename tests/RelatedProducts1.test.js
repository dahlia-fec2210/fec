/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

import RelatedItems from '../src/components/relatedItems/RelatedItems.jsx';

const mockResponse = [37312, 37313, 37318, 37317];

const handlers = [
  rest.get('http://localhost:3001/products/:productId/related', (req, res, ctx) => {
    if (req.params.productId === '37311') {
      return res(ctx.json(mockResponse));
    }
    return res(ctx.json({ boo: 'error' }));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
beforeAll(() => server.resetHandlers());
afterAll(() => server.close());

test('renders related products and outfit list with 37311', async () => {
  render(<RelatedItems currentProduct={37311} />);
  expect(screen.getByTestId('related-heading')).toHaveTextContent('Related Products');
  expect(screen.getByTestId('add-card')).toHaveTextContent('Add to Outfit');
  expect(screen.getByTestId('outfit-heading')).toHaveTextContent('Your Outfit');
  expect(screen.getByTestId('related-arrow-left')).toBeEmptyDOMElement();
  expect(screen.getByTestId('related-arrow-right')).toBeEmptyDOMElement();
  expect(screen.getByTestId('outfit-arrow-left')).toBeEmptyDOMElement();
  expect(screen.getByTestId('outfit-arrow-right')).toBeEmptyDOMElement();
});
