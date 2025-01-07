import React, { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import Checkout from "./Components/Checkout/Checkout"; // Adjust the path as necessary
import Register from "./Components/Register";
import { UserContext } from "./Context/UserContext";

function App() {
  let [user, setUser] = useState({
    isLoggedIn: false,
    currentUserId: null,
    currentUserName: null,
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="">
        <Login />
        {/* <Checkout /> */}
        <Register />
      </div>
    </UserContext.Provider>
  );
}

export default App;
