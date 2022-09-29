import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MainPage from 'pages/Main-page';
import AboutUsPage from 'pages/About-page';
import DoesntExist from 'pages/404';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="main-page-header">
        <h1>React components</h1>
        <nav>
          <Link to="/">Main page</Link>
          <Link to="/about">About us</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="*" element={<DoesntExist />} />
      </Routes>
    </div>
  );
}

export default App;
