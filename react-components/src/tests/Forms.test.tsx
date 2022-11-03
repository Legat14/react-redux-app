import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FormPage from 'components/pages/FormPage/FormPage';
import { Provider } from 'react-redux';
import store from 'model/store';

describe('Forms', (): void => {
  it('renders all form components', (): void => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <FormPage />
        </Provider>
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

  it('submit is disabled when rendered, enabled after input and disabled when click submit', (): void => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <FormPage />
        </Provider>
      </BrowserRouter>
    );
    const nameInput = screen.getByTestId('name-input');
    const birthDateInput = screen.getByTestId('birth-date-input');
    const submitInput = screen.getByTestId('submit-input');

    expect(submitInput).toBeDisabled();

    fireEvent.input(nameInput, {
      target: {
        value: 'John Smidt',
      },
    });

    expect(submitInput).toBeEnabled();
  });

  it('mistake messages are disabled when component mounts', (): void => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <FormPage />
        </Provider>
      </BrowserRouter>
    );
    const mistakeMessages = screen.getAllByTestId('mistake-message-div');

    expect(mistakeMessages[0]).toBeEmptyDOMElement();
    expect(mistakeMessages[1]).toBeEmptyDOMElement();
    expect(mistakeMessages[2]).toBeEmptyDOMElement();
  });

  it('mistake messages are enables when press submit', async (): Promise<void> => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <FormPage />
        </Provider>
      </BrowserRouter>
    );
    const nameInput = screen.getByTestId('name-input');
    const submitInput = screen.getByTestId('submit-input');

    fireEvent.input(nameInput, {
      target: {
        value: 1,
      },
    });
    fireEvent.click(submitInput);

    const mistakeMessages1 = await screen.findAllByTestId('mistake-message');
    expect(mistakeMessages1.length).toStrictEqual(3);
  });
});
