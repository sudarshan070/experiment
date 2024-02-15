import { render, screen } from '@testing-library/react';
import Login from './index';

test('renders learn react link', () => {
  render(<Login />);
  const headingElement = screen.getByText(/Welcome toElevation Connect 2024/i);
  expect(headingElement).toBeInTheDocument();
  const subHeadingElement = screen.getByText(/Please fill the below details to proceed to select the portfolio companies you want to meet with/i);
  expect(subHeadingElement).toBeInTheDocument();
});
