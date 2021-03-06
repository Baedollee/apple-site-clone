import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './pages/Home';
import IPhonePage from './pages/IPhonePage';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iphone" element={<IPhonePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
