/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import RemoveButton from '../src/components/OutfitList/RemoveButton.jsx';

test('renders remove button on outfit list with product 37315', async () => {
  const tree = renderer
    .create(<RemoveButton clothingPiece={37315} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
