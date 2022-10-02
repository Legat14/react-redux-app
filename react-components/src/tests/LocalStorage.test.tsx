import App from 'App';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe ('LocalStorage', () => {
  it('gets data from Local Storage', (): void => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const localStorageSearchInputBefore = localStorage.getItem('searchInput');
    expect(localStorageSearchInputBefore).toBeFalsy();

    const searchInput = screen.getByRole('searchbox');
    const navBar = screen.getByRole('navigation');
    const aboutUsLink = navBar.lastElementChild;

    if (searchInput) {
      fireEvent.input(
        searchInput,
        {
          target: {
            value: 'test'
          }
      });
    }
    if (aboutUsLink) {
      fireEvent.click(aboutUsLink);
    }
    const localStorageSearchInputAfter = localStorage.getItem('searchInput');
    expect(localStorageSearchInputAfter).toBe('test');

  });
});
