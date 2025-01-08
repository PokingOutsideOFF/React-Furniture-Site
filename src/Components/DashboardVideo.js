import React from "react";
// import "../css/dashboard.css";

function DashboardVideo(props) {
  return (
    <div class="">
      <div
        style={{
          backgroundColor: "#ddcfb5",
          borderTopLeftRadius: "200px",
          borderTopRightRadius: "200px",
          
        }}
      >
        <div className="d-flex flex-column justify-content-center align-items-center ">
          <p
            className="fs-6 fw-semibold text-secondary"
            style={{ marginTop: "50px", marginBottom: "0px" }}
          >
            Share your setup with
          </p>
          <h3
            className="h2 m-0 fw-bold fst mb-3"
            style={{ letterSpacing: "1px" }}
          >
            #FuniroFurniture
          </h3>
        </div>
        <div className="d-flex justify-content-center">
          <video
            className="mb-5"
            src="/assets/img/furniture-video.mp4"
            autoPlay
            loop
            muted
            style={{
              borderTopLeftRadius: "150px",
              borderTopRightRadius: "150px",
            }}
          ></video>
        </div>
        <section className="container-fluid">
          <div className="d-flex justify-content-center align-items-center gap-3 mb-5">
            <h3
              className=""
              style={{ borderBottom: "1px solid gray", paddingBottom: "3px" }}
            >
              What do our Customers Say About us ?
            </h3>
            <img
              src="../assets/img/heart-big.svg"
              alt=""
              width="34"
              id="testimonial-heart-img"
            />
          </div>

          <div className="row text-center">
            <div className="col-md-4 mb-5 mb-md-0">
              <div className="d-flex justify-content-center mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                  className="rounded-circle shadow-1-strong"
                  width="150"
                  height="150"
                />
              </div>
              <h5 className="mb-3">Maria Smantha</h5>
              <h6 className="text-primary mb-3">Web Developer</h6>
              <p className="px-xl-3">
                <i className="fas fa-quote-left pe-2"></i>I am thrilled with the
                modern furniture selection at FuniroFurniture! I highly
                recommend FuniroFurniture for anyone looking to elevate their
                home decor.
              </p>
              <ul className="list-unstyled d-flex justify-content-center mb-0">
                <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
                </li>
                <li>
                  <i className="fas fa-star-half-alt fa-sm text-warning"></i>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-5 mb-md-0">
              <div className="d-flex justify-content-center mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                  className="rounded-circle shadow-1-strong"
                  width="150"
                  height="150"
                />
              </div>
              <h5 className="mb-3">Lisa Cudrow</h5>
              <h6 className="text-primary mb-3">Graphic Designer</h6>
              <p className="px-xl-3">
                <i className="fas fa-quote-left pe-2"></i>FuniroFurniture offers
                a stunning selection of furniture, chairs, tables, and lamps.
                Their high-quality products truly elevate any living space.
              </p>
              <ul className="list-unstyled d-flex justify-content-center mb-0">
                <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-0">
              <div className="d-flex justify-content-center mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                  className="rounded-circle shadow-1-strong"
                  width="150"
                  height="150"
                />
              </div>
              <h5 className="mb-3">John Smith</h5>
              <h6 className="text-primary mb-3">Marketing Specialist</h6>
              <p className="px-xl-3">
                <i className="fas fa-quote-left pe-2"></i>I recently purchased
                some exquisite furniture pieces from FuniroFurniture and I
                couldn't be happier!
              </p>
              <ul className="list-unstyled d-flex justify-content-center mb-0">
                <li>
                  {/* <i className="fa-solid fa-star fa-sm text-warning"></i> */}
                  <i class="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star fa-sm text-warning"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star fa-sm text-warning"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star fa-sm text-warning"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star fa-sm text-warning"></i>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DashboardVideo;
