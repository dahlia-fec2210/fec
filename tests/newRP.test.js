/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

import RelatedItems from '../src/components/relatedItems/RelatedItems.jsx';

const serverRoute = `http://localhost:${process.env.PORT}`;

const mockResponse = [1, 2, 3, 4];

const handlers = [
  rest.get('http://localhost:3001/products/:productId/related', (req, res, ctx) => {
    console.log('IN HANDLER!!!');
    const { productId } = req.params.product_id;
    if (productId === '1') {
      return res(ctx.json(mockResponse));
    }
    // we can mock a bad request, sending a 500 status code for
    // any productId that is not '1'.
    return res(ctx.status(500));
  }),
];

// setupServer sets up msw server for request interception with the
// handlers we provided.
const server = setupServer(...handlers);

// start and close handlers for each test
beforeAll(() => server.listen());
beforeAll(() => server.resetHandlers());
afterAll(() => server.close());

// a basic test to test if React component renders with the proper values.
test('renders Product component with proper values', async () => {
  // Product component makes an axios GET request.
  const { getByText } = render(<RelatedItems currentProduct={1} />);

  // msw intercepts the request, and loads our mocked data.
  expect(getByText('Air Minis 250')).toBeVisible();
});
