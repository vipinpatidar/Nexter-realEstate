// import React from 'react'

import "./ContactForm.scss";
//icons
import { ImMobile } from "react-icons/im";
import { MdOutlineEmail } from "react-icons/md";

const ContactForm = () => {
  return (
    <div className="contactForm">
      {/* left */}
      <div className="contactForm_left">
        <div className="contactForm_flexCol">
          <h2 className="heading-4 heading-4--dark contactForm_heading">
            Have questions? Get in touch!
          </h2>
          <div className="contactForm_input_flexCol">
            <label htmlFor="fName">First Name</label>
            <input
              type="text"
              placeholder="Enter Your First Name..."
              id="fName"
            />
          </div>
          <div className="contactForm_input_flexCol">
            <label htmlFor="lName">Last Name</label>
            <input
              type="text"
              placeholder="Enter Your Last Name..."
              id="lName"
            />
          </div>
          <div className="contactForm_input_flexCol">
            <label htmlFor="email">Your Email</label>
            <input type="email" placeholder="Enter Your Email..." id="email" />
          </div>
          <div className="contactForm_input_flexCol">
            <label htmlFor="message">Message Us</label>
            <textarea
              placeholder="Enter Your Message..."
              id="message"
              rows="6"
              cols="10"
            />
          </div>
          <button className="btn contactForm_btn">Submit</button>
        </div>
      </div>
      {/* right */}
      <div className="contactForm_right">
        <div className="contactForm_flexCol contactForm_address">
          <h2 className="heading-4 heading-4--dark contactForm_heading">
            Address
          </h2>
          <div className="address">
            <h2 className="address_heading">India</h2>
            <address className="address_address">
              Nexter RealStates, Jaipur, Rajasthan, (302240)
            </address>
            <p className="address_info">
              <span>
                <MdOutlineEmail />
              </span>{" "}
              <span>vipinpatidar5@gmail.com</span>
            </p>
            <p className="address_info">
              <span>
                <ImMobile />
              </span>{" "}
              <span>(805) 857-3840</span>
            </p>
            <a className="address_link" href="#">
              Open Google Map
            </a>
          </div>
          <div className="address">
            <h2 className="address_heading">United State</h2>
            <address className="address_address">
              Nexter 1301 2nd Ave, Seattle, WA 98101 California, (95991)
            </address>
            <p className="address_info">
              <span>
                <MdOutlineEmail />
              </span>{" "}
              <span>JacobTomlinson@gmail.com</span>
            </p>
            <p className="address_info">
              <span>
                <ImMobile />
              </span>{" "}
              <span>(315) 905-2321</span>
            </p>
            <a className="address_link" href="#">
              Open Google Map
            </a>
          </div>
        </div>
        <div className="address_map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14245.736949639944!2d75.81853095!3d26.7942987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1683055931757!5m2!1sen!2sin"
            className="map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="India Gate, Jaipur, India"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
