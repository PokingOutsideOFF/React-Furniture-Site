import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route,HashRouter } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Checkout from "./Components/Checkout"; // Adjust the path as necessary
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import './css/cart.css'
import Cart from "./Components/cart";
import Dash from "./Components/Dash";
import AboutUs from "./Components/Contact"
import "./css/contact.css"

import Header from "./Components/Header"; // Ensure this path is correct

import { UserContext } from "./Context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  let [user, setUser] = useState({
    isLoggedIn: false,
    currentUserId: null,
    currentUserName: null,
  });

  const logout = () => {
    // Handle logout logic here
    setUser({
      isLoggedIn: false,
      currentUserId: null,
      currentUserName: null,
    });
    console.log("Logged out");
    window.location.hash="/"
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="">
        {/* <Login />
        {/* <Checkout /> */}
        {/* <Register /> */}
        {/* <Dashboard/> */}
        {/* <Cart /> */}
      </div>
      <HashRouter>
        <Header noOfItems={0} logout={logout} isLoggedIn={user.isLoggedIn} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dash/>} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<AboutUs />} />
          </Routes>
        </div>
      </HashRouter>
    </UserContext.Provider>
  );
}

export default App;
