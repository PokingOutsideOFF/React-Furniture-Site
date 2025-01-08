import React, { useEffect, useState } from "react";
import "../css/dashboard.css";

function Products(props) {
    const [products, setProducts] = useState([]); // Initialize state as an empty array

    useEffect(() => {
      fetchProducts();
    }, []);
  
    const fetchProducts = async () => {
      console.log("hello");
      try {
        let response = await fetch("http://localhost:5000/products");
        if (response.ok) {
          let body = await response.json();
          console.log(body);
          setProducts(body); // Correct state setter function
          console.log("Products:", body); // Log the fetched products
        } else {
          console.error("Network response was not ok.");
        }
      } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
      }
    };

  return (
<div>
      <div className="container mt-5">
        <div className="row border-danger justify-content-evenly mb-5">
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card overflow-hidden position-relative product-card" style={{ width: "100%", border: "none" }}>
                <div className="overflow-hidden">
                  <img src={product.image} className="card-img-top" alt={product.productName} height={300} />
                </div>
                <div className="card-body bg-body-secondary" style={{ letterSpacing: "1px" }}>
                  <h6 className="fw-semibold h6 m-0 mb-2">{product.productName}</h6>
                  <p className="fw-semibold text-secondary m-0" style={{ fontSize: "x-small" }}>
                    {product.category}
                  </p>
                  <p className="fw-semibold m-0" style={{ fontSize: "small" }}>
                    Rs {product.price}
                  </p>
                </div>
                <div className="hover-overlay w-100 h-100 top-0 position-absolute d-flex flex-column justify-content-center align align-items-center" style={{ backgroundColor: "rgba(128, 128, 128, 0.7)" }}>
                  <div className="mb-3" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
                    <button className="btn text-decoration-none px-4 fw-semibold add-to-cart-btn" style={{ color: "#b98e2f" }}>
                      Add to cart
                    </button>
                  </div>
                  <div className="d-flex gap-2">
                    <div className="share-div">
                      <img src="../assets/img/share.svg" alt="" width="16" />
                      <span className="text-white fw-semibold" style={{ fontSize: "small" }}>
                        Share
                      </span>
                    </div>
                    <div className="compare-div">
                      <img src="../assets/img/compare.svg" alt="" width="16" />
                      <span className="text-white fw-semibold" style={{ fontSize: "small" }}>
                        Compare
                      </span>
                    </div>
                    <div className="like-div">
                      <img src="../assets/img/heart.svg" alt="" width="16" />
                      <span className="text-white fw-semibold" style={{ fontSize: "small" }}>
                        Like
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
