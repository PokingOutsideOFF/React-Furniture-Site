import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

function Cart() {
  const [id, setID] = useState(1);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  let cartContext = useContext(CartContext);

  const { user } = useContext(UserContext);

  useEffect(() => {
    let totalAmount = 0;
    cart.forEach((item) => {
      if (item.product) {
        totalAmount += item.product.price * item.quantity;
      }
    });
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
        setCart(body);
      } else {
        console.error("Expected an array but got:", body);
        setCart([]);
      }

      const response2 = await fetch(`http://localhost:5000/products`, {
        method: "GET",
      });
      const body2 = await response2.json();

      let updatedCart = body;

      Object.keys(body2).forEach((i) => {
        Object.keys(body).forEach((order) => {
          if (body[order].productId === body2[i].id) {
            updatedCart[order].product = body2[i];
          }
        });
      });
      setCart(updatedCart);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setCart([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onIncrement = (product, max) => {
    let allProducts = [...cart];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity < max) {
      allProducts[index].quantity++;
      setCart(allProducts);
    }
  };

  const onDecrement = (product, min) => {
    let allProducts = [...cart];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity > min) {
      allProducts[index].quantity--;
      setCart(allProducts);
    }
  };

  const onDelete = async (ids) => {
    if (window.confirm("Are you sure?")) {
      try {
        const response3 = await fetch(`http://localhost:5000/orders/${ids}`, {
          method: "DELETE",
        });
        if (response3.ok) {
          const body = await response3.json();
          console.log(body);
          let newOrders = cart;
          newOrders = newOrders.filter((c) => {
            return c.id != ids;
          });
          setCart(newOrders);
          cartContext.item.count = newOrders.length;
        } else {
          console.error("Failed to delete the item");
        }
      } catch (error) {
        console.error("Failed to delete the item:", error);
      }
    }
  };

  return (
    <div>
      <div className="top">
        <img src="./assets/img/cart_img/top.png" alt="top" />
      </div>
      <div className="container-fluid">
        <section className="cart-section-outer">
          <div className="cart-section w-100">
            <div className="card p-5 w-100">
              <h2>Cart</h2>
              <span>Total items: {cart.length}</span>
              <hr className="cart-hr" />
              <table className="table table-hover">
                <thead>
                  <tr className="product-info text-center">
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((p) => (
                    <tr className="text-center" key={p.id}>
                      <td>{p.product ? p.product.productName : "N/A"}</td>
                      <td>{p.product ? p.product.price : "N/A"}</td>
                      <td>
                        <i
                          className="fa-solid fa-circle-minus"
                          onClick={() => onDecrement(p, 0)}
                          style={{
                            color: "#e6a400",
                            border: "none",
                            cursor: "pointer",
                          }}
                        >
                          -
                        </i>
                        {p.quantity}{" "}
                        <i
                          className="fa-solid fa-circle-plus"
                          onClick={() => onIncrement(p, 10)}
                          style={{
                            color: "#e6a400",
                            border: "none",
                            cursor: "pointer",
                          }}
                        >
                          +
                        </i>
                      </td>
                      <td>
                        {p.product ? p.product.price * p.quantity : "N/A"}
                      </td>
                      <td>
                        <button
                          className="fa-solid fa-trash btn btn-outline-danger"
                          onClick={() => onDelete(p.id)}
                          style={{ cursor: "pointer" }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="cart-total">
              <h3>Cart Totals</h3>
              <p className="Subtotal">
                Subtotal: <span className="total-amount">₹{total}</span>
              </p>
              <p className="Subtotal">
                Tax:{" "}
                <span className="total-amount">
                  ₹{Math.round(0.15 * total)}
                </span>
              </p>
              <p style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                Total:{" "}
                <span className="total-amount">
                  ₹{Math.round(total * 1.15)}
                </span>
              </p>

              <Link
                to={cart.length === 0 ? "/cart" : "/checkout"}
                className="checkout-btn"
                onClick={(e) => {
                  if (cart.length === 0) {
                    e.preventDefault(); // Prevent navigation
                    alert("Cart is empty");
                  }
                }}
              >
                {" "}
                Check Out
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="feature-wrapper">
            <div className="item">
              <img
                src="./assets/img/cart_img/trophy 1.png"
                alt="High Quality Icon"
              />
              <div>
                <h3>High Quality</h3>
                <p>crafted from top materials</p>
              </div>
            </div>
            <div className="item">
              <img
                src="./assets/img/cart_img/guarantee.png"
                alt="Warranty Icon"
              />
              <div>
                <h3>Warranty Protection</h3>
                <p>Over 2 years</p>
              </div>
            </div>
            <div className="item">
              <img
                src="./assets/img/cart_img/shipping.png"
                alt="Free Shipping Icon"
              />
              <div>
                <h3>Free Shipping</h3>
                <p>Order over $150</p>
              </div>
            </div>
            <div className="item">
              <img
                src="./assets/img/cart_img/customer-support.png"
                alt="Support Icon"
              />
              <div>
                <h3>24 / 7 Support</h3>
                <p>Dedicated support</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
