import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from 'components/pages/Main-page';
import AboutUsPage from 'components/pages/About-page';
import DoesntExist from 'components/pages/404';
import Layout from 'components/Layout';
import FormPage from 'components/pages/Form-page';

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
