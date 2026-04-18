import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Dashboard Component Tests', () => {
  
  test('renders the dashboard brand heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/FS Exp-2 Dashboard/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('counter initializes at 0 and increments on click', () => {
    render(<App />);
    
    const counterDisplay = screen.getByTestId('counter-display');
    expect(counterDisplay).toHaveTextContent('0');

    const incrementButton = screen.getByTestId('increment-button');
    fireEvent.click(incrementButton);

    expect(counterDisplay).toHaveTextContent('1');
  });

  test('renders the optimized data grid elements', () => {
    render(<App />);
    
    const listItems = screen.getAllByTestId('list-item');
    expect(listItems.length).toBe(5);
    expect(listItems[0]).toHaveTextContent('Application Analytics');
  });
  
});
