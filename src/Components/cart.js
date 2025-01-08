import React, { use } from "react";
import { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalAmount = 0;
    cart.forEach((item) => {
      if (item.product) {
        totalAmount += item.product.price * item.quantity;
      }
    });
    setTotal(totalAmount);
  }, [cart]);

  useEffect(() => {
    const fetchData = async () => {
      var id = 1;
      // add userid here using useContext in place of userId:${id}
      var response = await fetch(`http://localhost:5000/orders?userId=${id}`, {
        method: "GET",
      });
      var body = await response.json();
      setCart(body);

      var response2 = await fetch(`http://localhost:5000/products`, {
        method: "GET",
      });
      var body2 = await response2.json();

      let vansh = body;

      console.log(vansh);

      Object.keys(body2).forEach((i) => {
        Object.keys(body).forEach((order) => {
          if (body[order].productId == body2[i].id) {
            vansh[order].product = body2[i];
          }
        });
      });
      setCart(vansh);
      console.log(cart);
    };
    fetchData();
  }, []);

  let onIncrement = (product, max) => {
    let allProducts = [...cart];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity < max) {
      allProducts[index].quantity++;
      setCart(allProducts);
    }
  };

  let onDecrement = (product, min) => {
    let allProducts = [...cart];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity > min) {
      allProducts[index].quantity--;
      setCart(allProducts);
    }
  };

  let onDelete = (product) => {
    let allProducts = [...cart];
    let index = allProducts.indexOf(product);
    if (window.confirm("sure?")) {
      allProducts.splice(index, 1);
      setCart(allProducts);
    }
  };

  return (
    <div>
      <div class="top">
        <img src="./assets/img/cart_img/top.png" alt="top" />
      </div>
      <div class="container">
        <section class="cart-section-outer">
          <div class="cart-section w-100">
            <div class="card p-5 w-100">
              <h2>Cart</h2>
              <span>Total items:{cart.length}</span>
              <hr class="cart-hr" />
              <table class="table table-hover">
                <thead>
                  <tr class="product-info text-center">
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((p) => {
                    return (
                      <tr class="text-center">
                        <td>{p.productId}</td>
                        <td>{p.product ? p.product.price : "N/A"}</td>
                        <td>
                          <i
                            class="fa-solid fa-circle-minus"
                            onClick={() => {
                              onIncrement(p, 10);
                            }}
                            style={{
                              color: "#e6a400",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            +
                          </i>
                          {p.quantity}{" "}
                          <i
                            class="fa-solid fa-circle-plus"
                            onClick={() => {
                              onDecrement(p, 0);
                            }}
                            style={{
                              color: "#e6a400",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            -
                          </i>
                        </td>
                        <td>
                          {p.product ? p.product.price * p.quantity : "N/A"}
                        </td>
                        <td>
                          <button
                            class="fa-solid fa-trash"
                            onClick={() => onDelete(p)}
                            className="btn btn-outline-danger"
                            style={{ cursor: "pointer" }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div class="cart-total">
              <h3>Cart Totals</h3>
              <p class="Subtotal">
                Subtotal: <span class="total-amount">₹{total}</span>
              </p>
              <p class="Subtotal">
                Tax: <span class="total-amount">₹{0.15 * total}</span>
              </p>
              <p style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                Total:{" "}
                <span class="total-amount">₹{(total * 1.15).toFixed(2)}</span>
              </p>
              <button class="checkout-btn" href="checkout">
                <a href="checkout"> Check Out</a>
              </button>
            </div>
          </div>
        </section>

        <section>
          <div class="feature-wrapper">
            <div class="item">
              <img
                src="./assets/img/cart_img/trophy 1.png"
                alt="High Quality Icon"
              />
              <div>
                <h3>High Quality</h3>
                <p>crafted from top materials</p>
              </div>
            </div>
            <div class="item">
              <img
                src="./assets/img/cart_img/guarantee.png"
                alt="Warranty Icon"
              />
              <div>
                <h3>Warranty Protection</h3>
                <p>Over 2 years</p>
              </div>
            </div>
            <div class="item">
              <img
                src="./assets/img/cart_img/shipping.png"
                alt="Free Shipping Icon"
              />
              <div>
                <h3>Free Shipping</h3>
                <p>Order over $150</p>
              </div>
            </div>
            <div class="item">
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

      <Footer></Footer>
    </div>
  );
}

export default Cart;
