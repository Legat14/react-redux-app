import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import MainPage from 'components/pages/MainPage/MainPage';
import Header from 'components/Header';
import { Provider } from 'react-redux';
import store from 'store/store';
import Layout from 'components/Layout';

describe('Components', (): void => {
  it('renders React components text in App component', (): void => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const reactCompText = screen.getByText(/React hooks/i);
    expect(reactCompText).toBeInTheDocument();
  });
  it('renders search input in App component', (): void => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MainPage />
        </Provider>
      </BrowserRouter>
    );
    const searchInput = screen.getByRole('searchbox');
    expect(searchInput).toBeInTheDocument();
  });
  it('renders search button in App component', (): void => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MainPage />
        </Provider>
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
        <Provider store={store}>
          <MainPage />
        </Provider>
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
    screen.debug();
    const loadingScreen = await screen.findByAltText('loading...');

    expect(loadingScreen).toBeInTheDocument();
  });

  it('gets and renders cards', async (): Promise<void> => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Layout />
          <MainPage />
        </Provider>
      </BrowserRouter>
    );

    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
    const inputSort = screen.getByTestId('input-sort');
    expect(inputSort).toBeInTheDocument();
    const inputPhotosPerPage = screen.getByTestId('input-photos-per-page');
    expect(inputPhotosPerPage).toBeInTheDocument();
    const inputPageNumber = screen.getByTestId('input-page-number');
    expect(inputPageNumber).toBeInTheDocument();
    const searchBtn = screen.getByTestId('search-btn');
    expect(searchBtn).toBeInTheDocument();

    fireEvent.input(searchInput, {
      target: {
        value: 'Dog',
      },
    });
    fireEvent.click(searchBtn);
    const cards = await screen.findAllByTestId('photo-card');
    expect(cards[0]).toBeInTheDocument();
  });
});
