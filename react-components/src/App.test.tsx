import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import MainPage from 'components/pages/Main-page';
import Header from 'components/Header';
import SearchResult from 'components/Search-result';
import GameCard from 'components/Game-card';

describe ('Components', () => {
  it('renders React components text in App component', (): void => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    screen.debug();
    const reactCompText = screen.getByText(/React components/i);
    expect(reactCompText).toBeInTheDocument();
  });
  it('renders search input in App component', (): void => {
    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );
    screen.debug();
    const searchInput = screen.getByRole('searchbox');
    expect(searchInput).toBeInTheDocument();
  });
  it('renders search button in App component', (): void => {
    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );
    screen.debug();
    const searchBtn = screen.getByRole('button');
    expect(searchBtn).toBeInTheDocument();
  });
});

describe ('Cards quantity', () => {
  it('renders all cards', (): void => {
    render(<SearchResult />)
    const cards = screen.getAllByText(/Platform:/i);
    expect(cards.length).toBeGreaterThanOrEqual(6);
  });
});

describe ('Card content', () => {
  it('renders all card content', (): void => {
    render(<SearchResult />)
    let isTruthy = true;
    const headings = screen.getAllByRole('heading');
    headings.forEach(heading => {
      if (!heading.innerHTML.replace(' р.', '')) {
        isTruthy = false;
      }
    });

    const img = screen.getAllByRole('img');
    img.forEach(img => {
      if (!img.getAttribute('src')) {
        isTruthy = false;
      }
    });

    const platform = screen.getAllByText(/Platform:/i);
    platform.forEach(cardPlatform => {
      const currentCardPlatform = cardPlatform.nextElementSibling;
      if (!currentCardPlatform) {
        isTruthy = false;
      }
      const currentCardPlatformContent = currentCardPlatform?.innerHTML;
      if (!currentCardPlatformContent) {
        isTruthy = false;
      }
    });

    const release = screen.getAllByText(/Release date:/i);
    release.forEach(cardRelease => {
      const currentCardRelease = cardRelease.nextElementSibling;
      if (!currentCardRelease) {
        isTruthy = false;
      }
      const currentCardReleaseContent = currentCardRelease?.innerHTML;
      if (!currentCardReleaseContent) {
        isTruthy = false;
      }
    });
    expect(isTruthy).toBeTruthy();
  });
});

// Для проверки LocalStorage попробовать сэмитировать события введения строки
// и переключения на другой роут
