/* eslint-disable no-undef */
import React from 'react';
import ShallowRenderer from 'react-shallow-renderer';
import RelatedProduct from '../src/components/relatedItems/RelatedProduct.jsx';
import RelatedItems from '../src/components/relatedItems/RelatedItems.jsx';
import RelatedItems from '../src/components/relatedItems/RelatedItems.jsx';
import RelatedItems from '../src/components/relatedItems/RelatedItems.jsx';
import RelatedItems from '../src/components/relatedItems/RelatedItems.jsx';

// in your test:
const renderer = new ShallowRenderer();

it('renders', () => {
  renderer.render(<RelatedItems />);
  const result = renderer.getRenderOutput();
  expect(result.type).toBe('div');
});
