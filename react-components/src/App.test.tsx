import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe ('App', () => {
  it('renders React components text in App component', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    screen.debug();
    const reactCompText = screen.getByText(/React components/i);
    expect(reactCompText).toBeInTheDocument();
  });
  it('renders search input in App component', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    screen.debug();
    const searchInput = screen.getByRole('searchbox');
    expect(searchInput).toBeInTheDocument();
  });
  it('renders search button in App component', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    screen.debug();
    const searchBtn = screen.getByRole('button');
    expect(searchBtn).toBeInTheDocument();
  });
});
