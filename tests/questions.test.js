import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

// import ShallowRenderer from 'react-shallow-renderer';
import Questions from '../src/components/questions/Questions.jsx';

describe('Questions test', () => {
  const user = userEvent.setup();
  it('should render the add a question button', () => {
    render(<button
      className="add-question-button"
      onClick={() => {
        setOpenAddQuestionModal(true);
      }}
    >
      Add a Question

           </button>);
    expect(screen.getByRole('button')).toHaveTextContent(/Add a Question/i);
  });
});

// in your test:
// const renderer = new ShallowRenderer();

// it('renders', () => {
//   renderer.render(<Questions />);
//   const result = renderer.getRenderOutput();
//   expect(result.type).toBe('div');
// });
