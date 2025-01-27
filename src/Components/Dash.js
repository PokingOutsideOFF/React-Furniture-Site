import React, { useContext, useEffect, useState } from "react";
import "../css/dashboard.css";
import Products from "./Products";
import DashboardVideo from "./DashboardVideo";
import { UserContext } from "../Context/UserContext";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Dash(props) {
  let userContext = useContext(UserContext);
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

    useEffect(() => {
      document.title = "Dashboard - Furlenco";
    }, []);

  return (
    <div
      className="container-fluid mx-auto px-0"
      style={{ marginLeft: "50px", marginRight: "50px", paddingTop: "20px" }}
    >
      {showAlert && (
        <div
          id="alertContainer"
          className="alert alert-success fade show w-25 text-center"
          role="alert"
          style={{
            position: "fixed",
            top: "10px",
            left: "40%",
            zIndex: 12000,
          }}
        >
          Item added to cart successfully!
        </div>
      )}

      <div className="alert alert-warning alert-dismissible fade show ms-2">
        Welcome, {userContext.user.currentUserName}! 👋
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <div className="position-static">
        <img src="../assets/img/hero.png" alt="" style={{ width: "100%" }} />
        <div
          className="p-5 mt-5 position-absolute w-50 h-1000 z-1 rounded-2 d-flex flex-column"
          style={{ top: "40%", right: "5%", backgroundColor: "#fff3e3" }}
        >
          <h5 className="fs-6" style={{ letterSpacing: "2px" }}>
            New Arrival
          </h5>
          <h3 className="h fw-bold" style={{ color: "#b98e2f" }}>
            Discover Our
          </h3>
          <h3 className="h1 fw-bold" style={{ color: "#b98e2f" }}>
            New Collection
          </h3>
          <p className="fw-semibold" style={{ fontSize: "small" }}>
            Transform your space with stylish, affordable furniture from our
            online store <br />- " where comfort meets design at your
            fingertips"
          </p>
          <Link
            to="/shop"
            className="mt-2 px-5 py-3 text-decoration-none fw-semibold hero-buy-btn"
          >
            BUY NOW
          </Link>
        </div>
      </div>

      <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
        <h5 className="h5 fw-bold m-0">Browse The Range</h5>
        <p className="" style={{ fontSize: "small", letterSpacing: "1px" }}>
          Wide variety of products
        </p>
      </div>

      <div className="d-flex mb-3 justify-content-center">
        <div className="d-flex gap-4 p-0">
          <button
            className="carousel-control-prev position-static rounded-4 px-3 py-1 fw-bold"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
            style={{ backgroundColor: "#b98e2f" }}
          >
            {"<"}
          </button>
          <button
            className="carousel-control-next position-static rounded-4 px-3 py-1 fw-bold"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
            style={{ backgroundColor: "#b98e2f" }}
          >
            {">"}
          </button>
        </div>
      </div>

      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card-wrapper d-flex justify-content-around">
              <div
                className="card overflow-hidden"
                style={{ width: "14rem", border: "none" }}
              >
                <div className="overflow-hidden rounded-bottom-3">
                  <img
                    src="../assets/img/range-img-1.png"
                    className="card-img-top carousel-img"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-center fw-semibold">
                    Dining
                  </div>
                </div>
              </div>
              <div
                className="card overflow-hidden"
                style={{ width: "14rem", border: "none" }}
              >
                <div className="overflow-hidden rounded-bottom-3">
                  <img
                    src="../assets/img/range-img-2.png"
                    className="card-img-top carousel-img"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-center fw-semibold">
                    Living
                  </div>
                </div>
              </div>
              <div
                className="card overflow-hidden"
                style={{ width: "14rem", border: "none" }}
              >
                <div className="overflow-hidden rounded-bottom-3">
                  <img
                    src="../assets/img/range-img-3.png"
                    className="card-img-top carousel-img"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-center fw-semibold">
                    Bedroom
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card-wrapper d-flex justify-content-around">
              <div
                className="card overflow-hidden"
                style={{ width: "14rem", border: "none" }}
              >
                <div className="overflow-hidden rounded-bottom-3">
                  <img
                    src="../assets/img/range-img-5.jpg"
                    className="card-img-top carousel-img"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-center fw-semibold">
                    Dining
                  </div>
                </div>
              </div>
              <div
                className="card overflow-hidden"
                style={{ width: "14rem", border: "none" }}
              >
                <div className="overflow-hidden rounded-bottom-3">
                  <img
                    src="../assets/img/range-img-4.jpg"
                    className="card-img-top carousel-img"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-center fw-semibold">
                    Living
                  </div>
                </div>
              </div>
              <div
                className="card overflow-hidden"
                style={{ width: "14rem", border: "none" }}
              >
                <div className="overflow-hidden rounded-bottom-3">
                  <img
                    src="../assets/img/range-img-3.png"
                    className="card-img-top carousel-img"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-center fw-semibold">
                    Bedroom
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
        <h5 className="h5 fw-bold m-0">Our Products</h5>
      </div>

      <div className="container-fluid">
        <Products onAddToCart={handleAddToCart} />
      </div>

      <div className="container-fluid">
        <DashboardVideo />
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Dash;
