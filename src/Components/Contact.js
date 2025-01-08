import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faClock, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

const Contact = () => {
  return (
    <div className='container-fluid'>
      {/* Contact Header */}
      <section id="contact" >
        <div className=" contact-h pt-4 bgimage">
          <h1 className='text-center'>Contact</h1>
        </div>
      </section>

      {/* Contact Section */}
      <div className="contact-sec">
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

        <div className="row">
          <div className="col-md-4 contact-info mr-auto">
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <strong> Address</strong>
              <br />
              236 5th SE Avenue, New
              <br />
              York NY10000, United States
            </p>

            <p>
              <FontAwesomeIcon icon={faPhone} />
              <strong> Phone</strong>
              <br />
              Mobile: (+84) 546-6789
              <br />
              Hotline: (+84) 456-6789
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
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="name"
                  placeholder="Abc"
                  required
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
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="subject"
                  placeholder="This is optional"
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
                ></textarea>
              </div>

              <button type="submit" className="btn btn-outline-warning">
                Submit
              </button>
            </form>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Contact;
