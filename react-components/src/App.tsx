import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from 'components/pages/Main-page';
import AboutUsPage from 'components/pages/About-page';
import DoesntExist from 'components/pages/404';
import Layout from 'components/Layout';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="*" element={<DoesntExist />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
