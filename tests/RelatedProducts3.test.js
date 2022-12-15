/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import renderer from 'react-test-renderer';

import RelatedItems from '../src/components/relatedItems/RelatedItems.jsx';

const mockResponse = [37316, 37318, 37319, 37311, 37313];

const handlers = [
  rest.get('http://localhost:3001/products/:productId/related', (req, res, ctx) => {
    if (req.params.productId === '37315') {
      return res(ctx.json(mockResponse));
    }
    return res(ctx.json({ boo: 'error' }));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
beforeAll(() => server.resetHandlers());
afterAll(() => server.close());

test('renders related products and outfit list with 37315', async () => {
  const tree = renderer
    .create(<RelatedItems currentProduct={37315} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
