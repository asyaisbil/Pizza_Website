import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import React from 'react';
import OrderPage from './pages/OrderPage';
import HomePage from './pages/HomePage';
import SuccessPage from './pages/SuccessPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <OrderPage />
      {/*
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/order">
            <OrderPage />
          </Route>
          <Route path="/success">
            <SuccessPage />
          </Route>
        </Switch>
      </BrowserRouter>
  */}
    </div>
  );
}


