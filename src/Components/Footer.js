import React from "react";
import "../css/footer.css";

import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="d-flex justify-content-center">
        <footer className="w-100">
          <div className="footer w-100">
            <div className="footer-content">
              <div className="section">
                <h3 style={{ fontWeight: "bolder" }}>Furlenco</h3>
                <p>
                  400 University Drive Suite <br />
                  Coral Gables <br />
                  FL 33134 USA
                </p>
              </div>
              <div className="section">
                <h3>LINKS</h3>
                <p>
                  <NavLink to="/dashboard"> Home </NavLink>
                </p>
                <p>
                  <NavLink to="/shop"> Shop </NavLink>
                </p>
                <p>
                  <NavLink to="/contact"> Contact </NavLink>
                </p>
              </div>
              <div className="section">
                <h3>HELP</h3>
                <p>
                  <NavLink to="/2">Payment Options</NavLink>
                </p>
                <p>
                  <NavLink to="/2">Returns</NavLink>
                </p>
                <p>
                  <NavLink to="/2">Privacy Policies</NavLink>
                </p>
              </div>
              <div className="section">
                <h3>SIGN UP</h3>
                <p>Receive exclusive email-only promotions and offers</p>
                <button className="button">SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </footer>
      </section>

      <section className="footer">
        <hr />
        <p style={{ textAlign: "center" }} className="footer-text ps-5">
          2025 Funiro. All rights reserved.
          Made with Love ❤️. Team Pheonix 🐦‍🔥
        </p>
      </section>
    </div>
  );
}

export default Footer;
