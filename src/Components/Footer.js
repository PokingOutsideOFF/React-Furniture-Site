import React from "react";
import "../css/footer.css";

function Footer() {
  return (
    <div>
      <section className="d-flex justify-content-center">
        <footer className="w-100">
          <div className="footer w-100">
            <div className="footer-content">
              <div className="section">
                <h3 style={{ fontWeight: "bolder" }}>Funiro.</h3>
                <p>
                  400 University Drive Suite <br />
                  Coral Gables <br />
                  FL 33134 USA
                </p>
              </div>
              <div className="section">
                <h3>LINKS</h3>
                <p>
                  <a href="home.html"> Home </a>
                </p>
                <p>
                  <a href="#"> Shop </a>
                </p>
                <p>
                  <a href="#"> About </a>
                </p>
                <p>
                  <a href="#"> Contact </a>
                </p>
              </div>
              <div className="section">
                <h3>HELP</h3>
                <p>
                  <a href="#">Payment Options</a>
                </p>
                <p>
                  <a href="#">Returns</a>
                </p>
                <p>
                  <a href="#">Privacy Policies</a>
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
        <hr className="footer-hr" />
        <p style={{ textAlign: "center" }} className="footer-text">
          2024 furino. All rights reserved
        </p>
      </section>
    </div>
  );
}

export default Footer;
