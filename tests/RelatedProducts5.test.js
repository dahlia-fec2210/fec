/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import OutfitCardPhoto from '../src/components/OutfitList/OutfitCardPhoto.jsx';

test('renders photo for outfit list card with product 37315', async () => {
  const tree = renderer
    .create(<OutfitCardPhoto photo="https://img.ltwebstatic.com/images3_pi/2022/04/06/16492430704a5786a3329d6838490cfcc903aa6996_thumbnail_600x.webp" clothingPiece={37315} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
