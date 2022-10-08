import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FormPage from 'components/pages/Form-page';

describe ('Forms', (): void => {
  it('renders all form components', (): void => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
    const form = screen.getByTestId('form');
    const avatarInput = screen.getByTestId('avatar-input');
    const birthDateInput = screen.getByTestId('birth-date-input');
    const countryInput = screen.getByTestId('country-input');
    const pcInput = screen.getByTestId('pc-input');
    const ps5Input = screen.getByTestId('ps5-input');
    const xboxInput = screen.getByTestId('xbox-input');
    const switchInput = screen.getByTestId('switch-input');
    const nameInput = screen.getByTestId('name-input');
    const submitInput = screen.getByTestId('submit-input');

    expect(form).toBeInTheDocument();
    expect(avatarInput).toBeInTheDocument();
    expect(birthDateInput).toBeInTheDocument();
    expect(countryInput).toBeInTheDocument();
    expect(pcInput).toBeInTheDocument();
    expect(ps5Input).toBeInTheDocument();
    expect(xboxInput).toBeInTheDocument();
    expect(switchInput).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(submitInput).toBeInTheDocument();
  });
});
