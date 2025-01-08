import React from "react";
import "../css/shop.css";
import Products from "./Products";
import Footer from "./Footer";

function Shop() {
  return (

    <div class="container-fluid" style={{ paddingTop: "60px" }}>
      <div class="rect mb-3">
        <img
          src="./assets/img/shop_head.png"
          class="rect-img-top"
          alt="Shop Header Image"
        />
        <div class="d-flex p-3">
          <div>
            <img
              src="./assets/img/Vector.png"
              class="container-icon-img"
              alt="filter icon"
            />
            <img
              src="./assets/img/ci_grid-big-round.png"
              class="container-icon-img"
              alt="grid view icon"
            />
            <img
              src="./assets/img/bi_view-list.png"
              class="container-icon-img"
              alt="list view icon"
            />
          </div>
          <p class="container-text">Showing 1-16 of 32 results</p>
        </div>
      </div>
      <div class="container-fluid">
        <Products />
    </div>
        <div class=" container-fluid ">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="wrappers container-fluid ">
          <div class="itemshop">
            <img src="./assets/img/trophy 1.png" alt="High Quality Icon" />
            <div>
              <h3>High Quality</h3>
              <p>crafted from top materials</p>
            </div>
          </div>
          <div class="itemshop">
            <img src="./assets/img/guarantee.png" alt="Warranty Icon" />
            <div>
              <h3>Warranty Protection</h3>
              <p>Over 2 years</p>
            </div>
          </div>
          <div class="itemshop">
            <img src="./assets/img/shipping.png" alt="Free Shipping Icon" />
            <div>
              <h3>Free Shipping</h3>
              <p>Order over $150</p>
            </div>
          </div>
          <div class="itemshop">
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
