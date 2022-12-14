import React from 'react';

import ShallowRenderer from 'react-shallow-renderer';
import Questions from '../src/components/questions/Questions.jsx';

// in your test:
const renderer = new ShallowRenderer();

it('renders', () => {
  renderer.render(<Questions />);
  const result = renderer.getRenderOutput();
  expect(result.type).toBe('div');
});
