import "../css/checkout.css";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";
import "../css/checkout.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

function Checkout() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const { user } = useContext(UserContext);
  const cartContext = useContext(CartContext);

  useEffect(() => {
    const totalAmount = cart.reduce((acc, item) => {
      return item.product ? acc + item.product.price * item.quantity : acc;
    }, 0);
    setTotal(totalAmount);
  }, [cart]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/orders?userId=${user.currentUserId}`,
        {
          method: "GET",
        }
      );
      const body = await response.json();
      if (Array.isArray(body)) {
        const response2 = await fetch(`http://localhost:5000/products`, {
          method: "GET",
        });
        const body2 = await response2.json();
        const updatedCart = body.map((order) => ({
          ...order,
          product: body2.find((product) => product.id === order.productId),
        }));
        setCart(updatedCart);
      } else {
        console.error("Expected an array but got:", body);
        setCart([]);
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setCart([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const calculateTotal = () => {
    return cart.reduce((acc, item) => {
      return item.product ? acc + item.product.price * item.quantity : acc;
    }, 0);
  };

  const totalAmount = calculateTotal();
  const tax = (0.15 * totalAmount).toFixed(2);
  const totalPrice = (totalAmount * 1.15).toFixed(2);

    useEffect(() => {
      document.title = "Checkout - Furlenco";
    }, []);

  return (
    <div style={{ paddingTop: "0px" }}>
      <section id="contact">
        <div className=" contact-h pt-4 bgimage">
          <h1 className="text-center">Checkout</h1>
        </div>
      </section>

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

            <div><h6>Thank you for shopping with us...❤️❤️  <b>{user.currentUserName}</b>!!. <br />
            This is your shopping summary👇👇⚡</h6></div>

            <div className="order-summary">
              <h2 className="order-summary-title">Product</h2>
              <h2 className="order-summary-title">Subtotal</h2>
              <div className="order-item">
                <table>
                  <tbody>
                    {cart.map((p) => (
                      <tr className="text-left" key={p.id}>
                        <td>
                          <span className="product-name">
                            {p.product ? p.product.productName : "N/A"}
                          </span>
                        </td>
                        <td>
                          <span className="product-price">
                            ₹{p.product ? p.product.price : "N/A"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="order-subtotal">
                <span className="subtotal-label">Subtotal</span>
                <span className="subtotal-price">
                  ₹{totalAmount.toFixed(2)}
                </span>
              </div>
              <div className="order-subtotal">
                <span className="subtotal-label">Tax</span>
                <span className="subtotal-price">₹{tax}</span>
              </div>
              <div className="order-total">
                <span className="total-label">Total</span>
                <span className="total-price">₹{totalPrice}</span>
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

      <Footer />
    </div>
  );
}

export default Checkout;
