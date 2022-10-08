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

  it('submit is disabled when rended, enabled after input and disabled click submit', (): void => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
    const nameInput = screen.getByTestId('name-input');
    const birthDateInput = screen.getByTestId('birth-date-input');
    const submitInput = screen.getByTestId('submit-input');

    expect(submitInput).toBeDisabled();
    
    fireEvent.input(nameInput, {
      target:
      {
        value: "John Smidt"
      }
    });
    fireEvent.input(nameInput, {
      target:
      {
        value: "John Smidt"
      }
    });
    fireEvent.input(birthDateInput, {
      target:
      {
        value: "10101980"
      }
    });

    expect(submitInput).toBeEnabled();

    fireEvent.click(submitInput);

    expect(submitInput).toBeDisabled();
  });

  it('mistake messages are disabled when component mounts', (): void => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
    const mistakeMessages = screen.getAllByTestId('mistake-message');

    expect(mistakeMessages[0]).toHaveClass('form__mistake-message_hidden');
    expect(mistakeMessages[1]).toHaveClass('form__mistake-message_hidden');
    expect(mistakeMessages[2]).toHaveClass('form__mistake-message_hidden');
  });

  it('mistake messages are enables when press submit', (): void => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
    const nameInput = screen.getByTestId('name-input');
    const mistakeMessages = screen.getAllByTestId('mistake-message');
    const submitInput = screen.getByTestId('submit-input');

    fireEvent.input(nameInput, {
      target: {
        value: 'John',
      }
    })
    fireEvent.click(submitInput);

    const shownMistakeMessages = mistakeMessages.filter((message): boolean => {
      if (message.classList.contains('form__mistake-message_hidden')) {
        return false;
      }
      return true;
    });
    expect(shownMistakeMessages.length).toStrictEqual(2);
  });
});
