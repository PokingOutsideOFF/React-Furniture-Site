import React, { useState, useEffect } from "react";
import "./Checkout.css"

function Checkout() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const url = "http://localhost:5000/cart";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCart(data);
        calculateTotal(data);
      })
      .catch((error) => {
        console.error("There was an error fetching the cart data!", error);
      });
  }, []);

  const calculateTotal = (cartItems) => {
    let totalAmount = 0;
    for (let item of cartItems) {
      totalAmount += item.price;
    }
    setTotal(totalAmount);
  };

  return (
    <div>
      <div className="banner-container w-100">
        <img
          src="./assets/img/checkout.png"
          alt="Background Image"
          className="banner-image"
        />
        <div className="checkout-title-container">
          <div className="checkout-title">Checkout</div>
        </div>
        <div className="breadcrumb">
          <div className="breadcrumb-home">
            <a
              href="../home.html"
              style={{ color: "black", textDecoration: "none" }}
            >
              Home
            </a>
          </div>
          <div className="breadcrumb-current">Checkout</div>
          <div className="breadcrumb-arrow">
            <img
              src="./assets/img/dashicons_arrow-down-alt2.png"
              alt="Icon"
              className="arrow-icon"
            />
          </div>
        </div>
      </div>

      <form method="get">
        <div className="checkout-content">
          <div className="billing-details">
            <h1 className="section-title">Billing details</h1>
            <div className="form-group name-fields">
              <div className="form-field">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="first-name" required />
              </div>
              <div className="form-field">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="last-name" required />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="company-name" className="label">
                Company Name (Optional)
              </label>
              <input id="company-name" type="text" className="input" />
            </div>
            <div className="input-group">
              <label htmlFor="street-address" className="label">
                Street address
              </label>
              <input
                id="street-address"
                type="text"
                className="input"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="zip-code" className="label">
                ZIP code
              </label>
              <input id="zip-code" type="text" className="input" required />
            </div>
            <div className="input-group">
              <label htmlFor="city" className="label">
                Town / City
              </label>
              <input id="city" type="text" className="input" required />
            </div>
            <div className="input-group">
              <label htmlFor="country" className="label">
                Country / Region
              </label>
              <select id="country" className="input" name="country" required>
                <option value="India" selected>
                  India
                </option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="province" className="label">
                Province
              </label>
              <input
                id="province"
                type="text"
                className="input"
                placeholder="Western Province"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone" className="label">
                Phone
              </label>
              <input
                id="phone"
                type="text"
                className="input"
                pattern="[\\+]{1}[0-9]{2}-[0-9]{10}"
                placeholder="+91-1234567890"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email" className="label">
                Email address
              </label>
              <input
                id="email"
                type="email"
                className="input"
                placeholder="abc@xyz.com"
                required
              />
            </div>
            <div className="additional-info">
              <textarea placeholder="Additional information"></textarea>
            </div>
          </div>

          <div className="order-summary">
            <h2 className="section-title">Order Summary</h2>
            <div className="order-summary">
              <h2 className="order-summary-title">Product</h2>
              <h2 className="order-summary-title">Subtotal</h2>
              <div className="order-item">
                <table>
                  <tbody>
                    {cart.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <span className="product-name">{item.item}</span>
                        </td>
                        <td>
                          <span className="product-price">₹{item.price}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="order-subtotal">
                <span className="subtotal-label">Subtotal</span>
                <span className="subtotal-price">₹{total}</span>
              </div>
              <div className="order-subtotal">
                <span className="subtotal-label">Tax</span>
                <span className="subtotal-price">₹{0.15 * total}</span>
              </div>
              <div className="order-total">
                <span className="total-label">Total</span>
                <span className="total-price">₹{total * 1.15}</span>
              </div>
              <div className="payment-options">
                <div className="payment-option selected">
                  <input
                    type="radio"
                    id="bank-transfer"
                    name="payment"
                    defaultChecked
                  />
                  <label htmlFor="bank-transfer">Direct Bank Transfer</label>
                  <p className="payment-instructions">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                </div>
                <div className="payment-option selected">
                  <input type="radio" id="cash-on-delivery" name="payment" />
                  <label htmlFor="cash-on-delivery">Cash On Delivery</label>
                </div>
              </div>
              <p className="privacy-notice">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <a href="#">privacy policy</a>.
              </p>
              <button
                className="place-order-button"
                value="Submit"
                type="submit"
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="features-container">
        <div className="feature-item">
          <img
            src="./assets/img/Group.png"
            alt="High Quality"
            className="feature-icon"
          />
          <h3>High Quality</h3>
          <p>crafted from top materials</p>
        </div>
        <div className="feature-item">
          <img
            src="./assets/img/guarantee.png"
            alt="Warranty Protection"
            className="feature-icon"
          />
          <h3>Warranty Protection</h3>
          <p>Over 2 years</p>
        </div>
        <div className="feature-item">
          <img
            src="./assets/img/shipping.png"
            alt="Free Shipping"
            className="feature-icon"
          />
          <h3>Free Shipping</h3>
          <p>Order over 150 $</p>
        </div>
        <div className="feature-item">
          <img
            src="./assets/img/customer-support.png"
            alt="24/7 Support"
            className="feature-icon"
          />
          <h3>24 / 7 Support</h3>
          <p>Dedicated support</p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
