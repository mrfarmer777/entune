import { render, screen} from '@testing-library/react';
import App from './App';


let container = null
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

test('Renders the current level', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to level 1/i);
  expect(linkElement).toBeInTheDocument();
});
