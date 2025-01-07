import React from 'react';
import './App.css';
import Login from './Components/Login';
import Checkout from './Components/Checkout/Checkout'; // Adjust the path as necessary

function App() {
  return (
    <div className="App">
      <Login />
      <Checkout />
    </div>
  );
}

export default App;
