import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="container-fluid px-0" style={{ paddingTop: "0px" }}>
      {/* Contact Header */}
      <section id="contact">
        <div className="contact-h pt-4 bgimage">
          <h1 className="text-center">Contact</h1>
        </div>
      </section>

      {/* Contact Section */}
      <div className="contact-sec px-0 pb-0">
        <div className="row">
          {/* Contact Info */}
          <div className="col-md-12 contact-info1">
            <h2>Get In Touch With Us</h2>
            <p>
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us
              <br />
              An Email. Our Staff Always Be There To Help You Out. Do Not
              Hesitate!
            </p>
          </div>
        </div>

        <div className="row mx-5">
          <div className="col-md-4 contact-info mr-auto">
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <strong> Address</strong>
              <br />
              Furlenco
              <br />
              India Pvt. Ltd.
            </p>

            <p>
              <FontAwesomeIcon icon={faPhone} />
              <strong> Phone</strong>
              <br />
              Mobile: (+91) 546-6789
              <br />
              Hotline: (+91) 456-6789
            </p>

            <p>
              <FontAwesomeIcon icon={faClock} />
              <strong> Working Time</strong>
              <br />
              Monday-Friday: 9:00 - 22:00
              <br />
              Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>

          {/* Contact Form */}
          <div className="col-md-6 mb-5">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="name"
                  placeholder="Abc"
                  required
                  style={{ fontSize: "medium" }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="email"
                  placeholder="Abc@gmail.com"
                  required
                  style={{ fontSize: "medium" }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="subject"
                  placeholder="This is optional"
                  style={{ fontSize: "medium" }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control form-control-lg"
                  id="message"
                  rows="4"
                  placeholder="Hi! I'd like to ask about"
                  required
                  style={{ fontSize: "medium" }}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-outline-warning">
                Submit
              </button>
            </form>
          </div>
        </div>

        {showAlert && (
          <div className="alert alert-success text-center" role="alert">
            Thank you for your feedback!
          </div>
        )}

        <Footer></Footer>
      </div>
    </div>
  );
};

export default Contact;
