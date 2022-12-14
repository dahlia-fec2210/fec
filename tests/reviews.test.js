import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import MoreReviewsButton from '../src/components/reviews/MoreReviewsButton.jsx';

describe('Reviews test', () => {
  const user = userEvent.setup();
  it('should render the add more reviews button', () => {
    render(<MoreReviewsButton currentProduct={37311} />);
    expect(screen.getByRole('button')).toHaveTextContent(/more reviews/i);
  });
});
