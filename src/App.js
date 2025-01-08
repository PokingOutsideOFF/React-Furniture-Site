import React from 'react';
import './App.css';
import Login from './Components/Login';
import Checkout from './Components/Checkout/Checkout'; // Adjust the path as necessary

import Register from "./Components/Register";
import Dashboard from './Components/Dashboard';
import './css/cart.css'
import Cart from './Components/cart';
function App() {
  return (
    <div className="">
      {/* <Login />
      <Checkout />
      <Register /> */}
      {/* <Dashboard/> */}
      <Cart/>
    </div>
  );
}

export default App;
