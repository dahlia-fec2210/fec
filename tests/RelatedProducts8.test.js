/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import ClothingPiece from '../src/components/OutfitList/ClothingPiece.jsx';

test('renders snapshot for clothing piece', async () => {
  const tree = renderer
    .create(<ClothingPiece />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
