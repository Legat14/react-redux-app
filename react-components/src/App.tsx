import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from 'components/pages/MainPage';
import AboutUsPage from 'components/pages/AboutUsPage';
import DoesntExist from 'components/pages/DoesntExist';
import Layout from 'components/Layout';
import FormPage from 'components/pages/FormPage';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="form" element={<FormPage />} />
          <Route path="*" element={<DoesntExist />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
