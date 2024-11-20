// imports, include the counter 
import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter'; // Adjust the path if necessary
import userEvent from '@testing-library/user-event';


//same thing kind of as app.test.js but render the counter
beforeEach(() => {
  render(<Counter />);
});

//make sure message renders
test('renders counter message', () => {
  const message = screen.getByText(/Counter/i); 
  expect(message).toBeInTheDocument();
});

//check init count is 0
test('should render initial count with value of 0', () => {
  const countValue = screen.getByTestId('count'); 
  expect(countValue).toHaveTextContent('0');
});


// testing the plus button to increment count
test('clicking + increments the count', () => {
  const plusButton = screen.getByText('+'); 
  const countValue = screen.getByTestId('count'); 

  userEvent.click(plusButton);
  expect(countValue).toHaveTextContent('1');
});

//now testing the minus
test('clicking - decrements the count', () => {
  const minusButton = screen.getByText('-'); 

  const countValue = screen.getByTestId('count'); 

  userEvent.click(minusButton);
  expect(countValue).toHaveTextContent('-1'); 
});
