import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import React from 'react';
import OrderPage from './pages/OrderPage';
import HomePage from './pages/HomePage';
import SuccessPage from './pages/SuccessPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <SuccessPage />
    </div>
  );
}

export default App
