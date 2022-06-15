import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import './styles.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
}

export default App;
