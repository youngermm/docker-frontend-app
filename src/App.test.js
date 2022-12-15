import { render, screen } from '@testing-library/react';
import App from './App';

test('renders application greeting element', () => {
  render(<App />);
  const greetingElement = screen.getByText(/Hello there/i);
  expect(greetingElement).toBeInTheDocument();
});
