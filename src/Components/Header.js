import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../css/header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faClock, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { CartContext } from "../Context/CartContext";

const Header = ({ noOfItems, logout, isLoggedIn }) => {

  let cartContext = useContext(CartContext)
  
  return (
    <header className="d-flex justify-content-center" >
      <NavLink
        to="/dashboard"
        className="navbar-icon d-flex text-decoration-none text-black gap-2"
      >
        <div style={{ position: "absolute", left: 30, top: 30 }}>
          <img src="../assets/logo.png" alt="Furniro" className="head-icon" />
          <span
            className="h2 fw-bold"
            style={{ letterSpacing: "1.5px", position: "absolute" }}
          >
            Furlenco
          </span>
        </div>
      </NavLink>
      <nav>
        <ul className="sub-head">
          {isLoggedIn ? (
            <>
              <li style={{ marginLeft: "2em" }}>
               
                <NavLink
                  className="home nav-link"
                  to="/dashboard"
                  activeClassName="active"
                >
                  Dashboard
                </NavLink>
              </li>
              <li style={{ marginLeft: "2em" }}>
                <NavLink
                  className="hov nav-link"
                  to="/shop"
                  activeClassName="active"
                >
                  Shop
                </NavLink>
              </li>
              <li style={{ marginLeft: "2em" }}>
                <NavLink
                  className="hov nav-link"
                  to="/about"
                  activeClassName="active"
                >
                  About
                </NavLink>
              </li>
              <li style={{ marginLeft: "2em", marginRight: "8em" }}>
                <NavLink
                  className="hov nav-link"
                  to="/contact"
                  activeClassName="active"
                >
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
                  className="hov nav-link"
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
                <NavLink
                  className="hov nav-link"
                  to="/"
                  activeClassName="active"
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hov nav-link"
                  to="/register"
                  activeClassName="active"
                >
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