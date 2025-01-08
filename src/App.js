import React, { useState } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Checkout from "./Components/Checkout"; // Adjust the path as necessary
import Register from "./Components/Register";
import Cart from "./Components/cart";
import Dash from "./Components/Dash";
import AboutUs from "./Components/Contact";
import "./css/contact.css";
import { UserContext } from "./Context/UserContext";
import Header from "./Components/Header"; // Ensure this path is correct
import { CartContext, CartProvider } from "./Context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/cart.css";
import "font-awesome/css/font-awesome.css"
import Shop from "./Components/Shop";
import Footer from "./Components/Footer";

function App() {
  const [user, setUser] = useState({
    isLoggedIn: false,
    currentUserId: null,
    currentUserName: null,
  });

  const [item, setItems] = useState({
    count: 0,
  });

  const logout = () => {
    // Handle logout logic here
    setUser({
      isLoggedIn: false,
      currentUserId: null,
      currentUserName: null,
    });

    setItems({
      count: 0,
    });
    console.log("Logged out");
    window.location.hash = "/";
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/* <CartContext.Provider value={{ item, setItems }}> */}
      <CartProvider>
        <HashRouter>
          <Header
            noOfItems={item.count}
            logout={logout}
            isLoggedIn={user.isLoggedIn}
          />
          <div className="container">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dash />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<AboutUs />} />
              <Route path="/shop" element={<Shop />} />
            </Routes>
          </div>
          {2 < 0 ? <Footer /> : ""}
        </HashRouter>
      </CartProvider>
      {/* </CartContext.Provider> */}
    </UserContext.Provider>
  );
}

export default App;
