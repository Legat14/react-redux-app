import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import MainPage from 'components/pages/MainPage/MainPage';
import Header from 'components/Header';
import SearchResult from '../components/pages/MainPage/components/SearchResult';

describe('Components', (): void => {
  it('renders React components text in App component', (): void => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const reactCompText = screen.getByText(/React components/i);
    expect(reactCompText).toBeInTheDocument();
  });
  it('renders search input in App component', (): void => {
    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );
    const searchInput = screen.getByRole('searchbox');
    expect(searchInput).toBeInTheDocument();
  });
  it('renders search button in App component', (): void => {
    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );
    const searchBtn = screen.getByRole('button');
    expect(searchBtn).toBeInTheDocument();
  });
});

describe('Get cards test', (): void => {
  it('renders load screen', async (): Promise<void> => {
    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );
    const searchInput = screen.getByRole('searchbox');
    const searchBtn = screen.getByRole('button');
    fireEvent.input(searchInput, {
      target: {
        value: 'Dog',
      },
    });
    fireEvent.click(searchBtn);
    const loadingScreen = await screen.findByAltText('loading...');
    expect(loadingScreen).toBeInTheDocument();
  });

  it('gets and renders cards', async (): Promise<void> => {
    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );
    const searchInput = screen.getByRole('searchbox');
    const searchBtn = screen.getByRole('button');
    fireEvent.input(searchInput, {
      target: {
        value: 'Dog',
      },
    });
    let modal = screen.queryByTestId('modal-window');
    expect(modal).toBeNull();
    fireEvent.click(searchBtn);
    const cards = await screen.findAllByTestId('photo-card');
    expect(cards[0]).toBeInTheDocument();
    fireEvent.click(cards[0]);
    modal = screen.getByTestId('modal-window');
    expect(modal).toBeInTheDocument();
  });
});
