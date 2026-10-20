import { render, screen } from '@testing-library/react';
import App from './App';

test('shows the meeting landing page and registration entry point', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'MeetBridge' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Get Started' })).toHaveAttribute('href', '/auth');
});
