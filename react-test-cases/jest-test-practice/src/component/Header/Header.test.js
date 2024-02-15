import { render, screen } from '@testing-library/react';
import Header from './index';

test('renders header element', () => {
  render(<Header />);
 const svgElement = screen.getByTestId('svg-element')
 expect(svgElement).toBeInTheDocument()
});
