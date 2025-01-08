import React, { useState } from "react";
import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Checkout from "./Components/Checkout"; // Adjust the path as necessary
import Register from "./Components/Register";
import Cart from "./Components/cart";
import Dash from "./Components/Dash";
import { UserContext } from "./Context/UserContext";
import Header from "./Components/Header"; // Ensure this path is correct
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/cart.css"

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
    window.location.hash = "/";
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <HashRouter>
        <Header noOfItems={0} logout={logout} isLoggedIn={user.isLoggedIn} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dash />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </HashRouter>
    </UserContext.Provider>
  );
}

export default App;
