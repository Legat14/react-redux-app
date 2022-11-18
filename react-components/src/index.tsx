import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import addBeforeUnloadEvent from 'controller/addBeforeUnloadEvent';
import { Provider } from 'react-redux';
import store from 'store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
addBeforeUnloadEvent();
