import React from 'react';
import './App.css';
import Login from './Components/Login';
import Checkout from './Components/Checkout/Checkout'; // Adjust the path as necessary

import Register from "./Components/Register";

function App() {
  return (
    <div className="">
      <Login />
      <Checkout />
      <Register />
    </div>
  );
}

export default App;
