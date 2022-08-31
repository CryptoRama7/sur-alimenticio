import { render, screen } from '@testing-library/react';
import Nav from './components/NavBar';

test('renders learn react link', () => {
  render(<Nav />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
