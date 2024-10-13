import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/users/:id" element={<User isAdmin={true} />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
