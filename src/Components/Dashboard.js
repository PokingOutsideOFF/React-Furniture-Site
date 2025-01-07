import React from 'react';


function Dashboard(props) {
  const cardStyle = {
    width: '14rem',
    border: 'none'
  };
  return (
    <div>
      <div class="container position-relative">
        <img src="./assets/img/hero.png" alt="" style={{ width: '100%' }} />
        <div
          class="p-5 position-absolute w-50 h-50 z-1 rounded-2 d-flex flex-column"
          style={{ top: '25%', right: '5%', backgroundColor: '#fff3e3' }}
        >
          <h5 class="fs-6" style={{ letterSpacing: '2px' }}>New Arrival</h5>
          <h3 class="h1 fw-bold" style={{ color: '#b98e2f' }}>Discover Our</h3>
          <h3 class="h1 fw-bold" style={{ color: '#b98e2f' }}>New Collection</h3>
          <p class="fw-semibold" style={{ fontSize: 'small' }}>
            Transform your space with stylish, affordable furniture from our
            online store <br />
            - " where comfort meets design at your fingertips "
          </p>
          <a
            href=""
            class="mt-2 px-5 py-3 text-decoration-none fw-semibold hero-buy-btn"
          >
            BUY NOW
          </a>
        </div>
      </div>

      {/* Browse The Range */}
      <div class="mt-5 d-flex flex-column justify-content-center align-items-center">
        <h5 class="h5 fw-bold m-0">Browse The Range</h5>
        <p style={{ fontSize: 'small', letterSpacing: 'px' }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </p>
      </div>

      {/* Carousel Range */}
      <div class="container d-flex mb-3 justify-content-center">
        <div class="d-flex gap-4 p-0">
          <span
            class="carousel-control-prev bg-black position-static rounded-4 px-3 py-1 fw-bold"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            @
          </span>
          <button
            class="carousel-control-next position-static rounded-4 px-3 py-1 fw-bold"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
            style={{ backgroundColor: '#b98e2f' }}
          >
            @
          </button>
        </div>
      </div>

      <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="card-wrapper container-sm d-flex justify-content-around">
            <div className="card overflow-hidden" style={cardStyle}>
              <div className="overflow-hidden rounded-bottom-3">
                <img src="../assets/img/range-img-1.png" className="card-img-top carousel-img" alt="Dining" />
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-center fw-semibold">Dining</div>
              </div>
            </div>
            <div className="card overflow-hidden" style={cardStyle}>
              <div className="overflow-hidden rounded-bottom-3">
                <img src="../assets/img/range-img-2.png" className="card-img-top carousel-img" alt="Living" />
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-center fw-semibold">Living</div>
              </div>
            </div>
            <div className="card overflow-hidden" style={cardStyle}>
              <div className="overflow-hidden rounded-bottom-3">
                <img src="../assets/img/range-img-3.png" className="card-img-top carousel-img" alt="Bedroom" />
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-center fw-semibold">Bedroom</div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card-wrapper container-sm d-flex justify-content-around">
            <div className="card overflow-hidden" style={cardStyle}>
              <div className="overflow-hidden rounded-bottom-3">
                <img src="../assets/img/range-img-5.jpg" className="card-img-top carousel-img" alt="Dining" />
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-center fw-semibold">Dining</div>
              </div>
            </div>
            <div className="card overflow-hidden" style={cardStyle}>
              <div className="overflow-hidden rounded-bottom-3">
                <img src="../assets/img/range-img-4.jpg" className="card-img-top carousel-img" alt="Living" />
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-center fw-semibold">Living</div>
              </div>
            </div>
            <div className="card overflow-hidden" style={cardStyle}>
              <div className="overflow-hidden rounded-bottom-3">
                <img src="../assets/img/range-img-3.png" className="card-img-top carousel-img" alt="Bedroom" />
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-center fw-semibold">Bedroom</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Our Products */}
      <div class="mt-5 d-flex flex-column justify-content-center align-items-center">
        <h5 class="h5 fw-bold m-0">Our Products</h5>
      </div>

      <div class="container overflow-hidden mt-5">
        <div class="row border-danger justify-content-evenly mb-5">
          <div class="col-2">
            <div class="card overflow-hidden position-relative product-card" style={{ width: '13rem', border: 'none' }}>
              <div class="overflow-hidden">
                <img src="./assets/img/syltherine.png" class="card-img-top" alt="..." />
              </div>
              <div class="card-body bg-body-secondary" style={{ letterSpacing: '1px' }}>
                <h6 class="fw-semibold h6 m-0 mb-2">Syltherine</h6>
                <p class="fw-semibold text-secondary m-0" style={{ fontSize: 'x-small' }}>
                  Stylish cafe chair
                </p>
                <p class="fw-semibold m-0" style={{ fontSize: 'small' }}>
                  Rs 2,500.000
                </p>
              </div>
              <div
                class="hover-overlay w-100 h-100 top-0 position-absolute d-flex flex-column justify-content-center align-items-center"
                style={{ backgroundColor: 'rgba(128, 128, 128, 0.7)' }}
              >
                <div class="mb-3" style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}>
                  <button
                    class="btn text-decoration-none px-4 fw-semibold add-to-cart-btn"
                    style={{ color: '#b98e2f' }}
                  >
                    Add to cart
                  </button>
                </div>
                <div class="d-flex gap-2">
                  <div class="share-div">
                    <img src="./assets/img/share.svg" alt="" width="16" />
                    <span class="text-white fw-semibold" style={{ fontSize: 'small' }}>Share</span>
                  </div>
                  <div class="compare-div">
                    <img src="./assets/img/compare.svg" alt="" width="16" />
                    <span class="text-white fw-semibold" style={{ fontSize: 'small' }}>Compare</span>
                  </div>
                  <div class="like-div">
                    <img src="./assets/img/heart.svg" alt="" width="16" />
                    <span class="text-white fw-semibold" style={{ fontSize: 'small' }}>Like</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat similar structure for other products */}
        </div>
        <div class="row border-danger justify-content-evenly">
          <div class="col-2">
            <div class="card overflow-hidden position-relative product-card" style={{ width: '13rem', border: 'none' }}>
              <div class="overflow-hidden">
                <img src="./assets/img/leviosa.png" class="card-img-top" alt="..." />
              </div>
              <div class="card-body bg-body-secondary" style={{ letterSpacing: '1px' }}>
                <h6 class="fw-semibold h6 m-0 mb-2">Syltherine</h6>
                <p class="fw-semibold text-secondary m-0" style={{ fontSize: 'x-small' }}>
                  Stylish cafe chair
                </p>
                <p class="fw-semibold m-0" style={{ fontSize: 'small' }}>
                  Rs 2,500.000
                </p>
              </div>
              <div
                class="hover-overlay w-100 h-100 top-0 position-absolute d-flex flex-column justify-content-center align-items-center"
                style={{ backgroundColor: 'rgba(128, 128, 128, 0.7)' }}
              >
                <div class="mb-3" style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}>
                  <button
                    class="btn text-decoration-none px-4 fw-semibold add-to-cart-btn"
                    style={{ color: '#b98e2f' }}
                  >
                    Add to cart
                  </button>
                </div>
                <div class="d-flex gap-2">
                  <div class="share-div">
                    <img src="./assets/img/share.svg" alt="" width="16" />
                    <span class="text-white fw-semibold" style={{ fontSize: 'small' }}>Share</span>
                  </div>
                  <div class="compare-div">
                    <img src="./assets/img/compare.svg" alt="" width="16" />
                    <span class="text-white fw-semibold" style={{ fontSize: 'small' }}>Compare</span>
                  </div>
                  <div class="like-div">
                    <img src="./assets/img/heart.svg" alt="" width="16" />
                    <span class="text-white fw-semibold" style={{ fontSize: 'small' }}>Like</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat similar structure for other products */}
        </div>
      </div>

      <div class="d-flex justify-content-center mt-4 mb-5">
        <button class="btn px-5 rounded-1 fw-semibold show-more-btn">
          Show More
        </button>
      </div>

      {/* Video */}
      <div
        class=""
        style={{
          backgroundColor: '#ddcfb5',
          borderTopLeftRadius: '200px',
          borderTopRightRadius: '200px',
        }}
      >
        <div class="d-flex flex-column justify-content-center align-items-center">
          <p
            class="fs-6 fw-semibold text-secondary"
            style={{ marginTop: '50px', marginBottom: '0px' }}
          >
            Share your setup with
          </p>
          <h3 class="h2 m-0 fw-bold fst mb-3" style={{ letterSpacing: '1px' }}>
            #FuniroFurniture
          </h3>
        </div>
        <div class="container d-flex justify-content-center">
          <video
            class="mb-5"
            src="./assets/img/furniture-video.mp4"
            autoPlay
            loop
            muted
            style={{ borderTopLeftRadius: '150px', borderTopRightRadius: '150px' }}
          ></video>
        </div>

        {/* Testimonials */}
        <section class="container">
          <div class="d-flex justify-content-center align-items-center gap-3 mb-5">
            <h3
              class=""
              style={{ borderBottom: '1px solid gray', paddingBottom: '3px' }}
            >
              What do our Customers Say About us ?
            </h3>
            <img
              src="./assets/img/heart-big.svg"
              alt=""
              width="34"
              id="testimonial-heart-img"
            />
          </div>

          <div class="row text-center">
            <div class="col-md-4 mb-5 mb-md-0">
              <div class="d-flex justify-content-center mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/./assets/img/Photos/Avatars/img%20(1).webp"
                  class="rounded-circle shadow-1-strong"
                  width="150"
                  height="150"
                  alt=""
                />
              </div>
              <h5 class="mb-3">Maria Smantha</h5>
              <h6 class="text-primary mb-3">Web Developer</h6>
              <p class="px-xl-3">
                <i class="fas fa-quote-left pe-2"></i>I am thrilled with the
                modern furniture selection at FuniroFurniture! I highly recommend
                FuniroFurniture for anyone looking to elevate their home decor.
              </p>
              <ul class="list-unstyled d-flex justify-content-center mb-0">
                <li><i class="fas fa-star fa-sm text-warning"></i></li>
                <li><i class="fas fa-star fa-sm text-warning"></i></li>
                <li><i class="fas fa-star fa-sm text-warning"></i></li>
                <li><i class="fas fa-star fa-sm text-warning"></i></li>
                <li><i class="fas fa-star-half-alt fa-sm text-warning"></i></li>
              </ul>
            </div>
            <div class="col-md-4 mb-5 mb-md-0">
              <div class="d-flex justify-content-center mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/./assets/img/Photos/Avatars/img%20(2).webp"
                  class="rounded-circle shadow-1-strong"
                  width="150"
                  height="150"
                  alt=""
                />
              </div>
              <h5 class="mb-3">Lisa Cudrow</h5>
              <h6 class="text-primary mb-3">Graphic Designer</h6>
              <p class="px-xl-3">
                <i class="fas fa-quote-left pe-2"></i>FuniroFurniture offers a
                stunning selection of furniture, chairs, tables, and lamps. Their
                high-quality products truly elevate any living space.
              </p>
              <ul class="list-unstyled d-flex justify-content-center mb-0">
                <li><i class="fas fa-star fa-sm text-warning"></i></li>
                <li><i class="fas fa-star fa-sm text-warning"></i></li>
                <li><i class="fas fa-star fa-sm text-warning"></i></li>
                <li><i class="fas fa-star fa-sm text-warning"></i></li>
                <li><i class="fas fa-star fa-sm text-warning"></i></li>
              </ul>
            </div>
            <div class="col-md-4 mb-0">
              <div class="d-flex justify-content-center mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/./assets/img/Photos/Avatars/img%20(9).webp"
                  class="rounded-circle shadow-1-strong"
                  width="150"
                  height="150"
                  alt=""
                />
              </div>
              <h5 class="mb-3">John Smith</h5>
              <h6 class="text-primary mb-3">Marketing Specialist</h6>
              <p class="px-xl-3">
                <i class="fas fa-quote-left pe-2"></i>I recently purchased some
                exquisite furniture pieces from FuniroFurniture and I couldn't be
                happier!
              </p>
              <ul class="list-unstyled d-flex justify-content-center mb-0">
                <li><i class="fas fa-star fa-sm text-warning"></i></li>
                <li><i class="fas fa-star fa-sm text-warning"></i></li>
                <li><i class="fas fa-star fa-sm text-warning"></i></li>
                <li><i class="fas fa-star fa-sm text-warning"></i></li>
                <li><i class="far fa-star fa-sm text-warning"></i></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
