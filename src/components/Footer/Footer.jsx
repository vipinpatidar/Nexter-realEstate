// import React from 'react';

import "./Footer.scss";
//image
import logo from "../../assets/outer/logo.png";
//icons
import { ImAppleinc } from "react-icons/im";
import {
  FaGooglePlay,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer_left">
          <img src={logo} alt="logo images" />
          <div className="flex">
            <div className="flex-col">
              <p className="text-gray text-custom">Total Free Customer Care</p>
              <h6 className="text-white">8058573840</h6>
            </div>
            <div className="flex-col">
              <p className="text-gray text-custom">Nee Live Support?</p>
              <h6 className="text-white">vipinpatidar.netlify.com</h6>
            </div>
          </div>
          <div className="flex-col">
            <h6 className="text-white text-social">Apps</h6>
            <div className="flex">
              <div className="flex app">
                <ImAppleinc className="icon" />
                <div className="flex-col">
                  <p className="text-gray">Download on the</p>
                  <h6 className="text-white">Apple Store</h6>
                </div>
              </div>
              <div className="flex app">
                <FaGooglePlay className="icon" />
                <div className="flex-col">
                  <p className="text-gray">Get it on</p>
                  <h6 className="text-white">Google Store</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-col">
            <h6 className="text-white text-social">
              Follow us on social media
            </h6>
            <div className="flex">
              <a className="social-icon">
                <FaFacebookF className="icon" />
              </a>
              <a className="social-icon">
                <FaTwitter className="icon" />
              </a>
              <a className="social-icon">
                <FaInstagram className="icon" />
              </a>
              <a className="social-icon">
                <FaLinkedinIn className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer_right">
          <div>
            <h6 className="text-white text-social">Keep Yourself Up to Date</h6>
            <div className="footer_input">
              <input
                type="email"
                name="name"
                placeholder="Enter Your Email..."
                id="name"
              />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="flex text-links">
            <div>
              <h6 className="text-white text-social">Popular Search</h6>
              <div className="links-flex">
                <p className="text-gray text-underline">Apartment for Rent</p>
                <p className="text-gray text-underline">
                  Apartment Low to hide
                </p>
                <p className="text-gray text-underline">Offices for Buy</p>
                <p className="text-gray text-underline">Offices for Rent</p>
              </div>
            </div>
            <div>
              <h6 className="text-white text-social">Quick Links</h6>
              <div className="links-flex">
                <p className="text-gray text-underline">Terms of Use</p>
                <p className="text-gray text-underline">Privacy Policy</p>
                <p className="text-gray text-underline">Pricing Plans</p>
                <p className="text-gray text-underline">Our Services</p>
                <p className="text-gray text-underline">Contact Support</p>
                <p className="text-gray text-underline">Careers</p>
                <p className="text-gray text-underline">FAQs</p>
              </div>
            </div>
            <div>
              <h6 className="text-white text-social">Discover</h6>
              <div className="links-flex">
                <p className="text-gray text-underline">Miami</p>
                <p className="text-gray text-underline">Los Angeles</p>
                <p className="text-gray text-underline">Chicago</p>
                <p className="text-gray text-underline">New York</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
