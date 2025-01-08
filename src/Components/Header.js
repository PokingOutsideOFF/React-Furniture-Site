import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faClock, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = ({ noOfItems, logout, isLoggedIn }) => {
  return (
    <header className="d-flex justify-content-center">
      <NavLink
        to="/dashboard"
        className="navbar-icon d-flex text-decoration-none text-black gap-2"
      >
        <img src="../assets/logo.png" alt="Furniro" className="head-icon" />
        <span className="h2 fw-bold" style={{ letterSpacing: "1.5px" }}>
          Furlenco
        </span>
      </NavLink>
      <nav>
        <ul className="sub-head">
          {isLoggedIn ? (
            <>
              <li style={{ marginLeft: "2em" }}>
                <NavLink className="home" to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
              <li style={{ marginLeft: "2em" }}>
                <NavLink className="hov" to="/shop">
                  Shop
                </NavLink>
              </li>
              <li style={{ marginLeft: "2em" }}>
                <NavLink className="hov" to="/about">
                  About
                </NavLink>
              </li>
              <li style={{ marginLeft: "2em", marginRight: "8em" }}>
                <NavLink className="hov" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="icon">
                <NavLink to="/profile">
                  <FontAwesomeIcon icon={faUser} />
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart">
                  <FontAwesomeIcon icon={faCartShopping} />
                </NavLink>
                <NavLink
                  to="/cart"
                  className="py-1 px-2 rounded-4"
                  style={{ backgroundColor: "#e6a400" }}
                >
                  {noOfItems}
                </NavLink>
              </li>
              <li>
                <a
                  className="hov"
                  onClick={logout}
                  style={{ cursor: "pointer" }}
                >
                  Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink className="hov" to="/">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink className="hov" to="/register">
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
