import React, { useState } from "react";
import "../css/shop.css";
import Products from "./Products";
import Footer from "./Footer";
import "../css/cart.css"

function Shop() {
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
  return (
    <div className="container-fluid px-0 " style={{ paddingTop: "0px" }}>
      {showAlert && (
        <div
          id="alertContainer"
          className="alert alert-success fade show w-25 text-center"
          role="alert"
          style={{
            position: "fixed",
            top: "10px",
            left: "40%",
            zIndex: 1050,
          }}
        >
          Item added to cart successfully!
        </div>
      )}
      <div className="">
        <section id="contact">
          <div className=" contact-h pt-4 bgimage">
            <h1 className="text-center">Shop</h1>
          </div>
        </section>
        <div className="d-flex p-3" style={{backgroundColor:"#F9F1E7"}}>
          <div>
            <img
              src="./assets/img/Vector.png"
              className="container-icon-img"
              alt="filter icon"
            />
            <img
              src="./assets/img/ci_grid-big-round.png"
              className="container-icon-img"
              alt="grid view icon"
            />
            <img
              src="./assets/img/bi_view-list.png"
              className="container-icon-img"
              alt="list view icon"
            />
          </div>
          <p className="container-text">Showing 1-16 of 32 results</p>
        </div>
      </div>
      <div className="container-fluid">
        <Products onAddToCart={handleAddToCart} />
      </div>
      <div className=" container-fluid ">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="wrappers container-fluid ">
        <div className="itemshop">
          <img src="./assets/img/trophy 1.png" alt="High Quality Icon" />
          <div>
            <h3>High Quality</h3>
            <p>crafted from top materials</p>
          </div>
        </div>
        <div className="itemshop">
          <img src="./assets/img/guarantee.png" alt="Warranty Icon" />
          <div>
            <h3>Warranty Protection</h3>
            <p>Over 2 years</p>
          </div>
        </div>
        <div className="itemshop">
          <img src="./assets/img/shipping.png" alt="Free Shipping Icon" />
          <div>
            <h3>Free Shipping</h3>
            <p>Order over $150</p>
          </div>
        </div>
        <div className="itemshop">
          <img src="./assets/img/customer-support.png" alt="Support Icon" />
          <div>
            <h3>24 / 7 Support</h3>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
    // </div>
  );
}

export default Shop;
