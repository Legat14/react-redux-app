import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import addBeforeUnloadEvent from 'controller/addBeforeUnloadEvent';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
addBeforeUnloadEvent();
