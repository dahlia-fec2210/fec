import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

// the React component we are testing.
import Questions from '../src/components/questions/Questions.jsx';

// our mock response to be sent.
const serverRoute = `http://localhost:${process.env.PORT}`;

const mockResponse = [1, 2, 3, 4];

// handlers is an array of msw handlers, very similar to express.js. Routes that match API requests
// will be intercepted by msw, allowing you to send your mock data.
const handlers = [
  rest.get('http://localhost:3001/qa/questions/:productId/', (req, res, ctx) => {
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
  const { getByText } = render(<Questions productId={1} />);

  // msw intercepts the request, and loads our mocked data.
  expect(getByText('Air Minis 250')).toBeVisible();
});
