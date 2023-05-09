// import React from "react";

import "./HelpContact.scss";
//icons
import { BsArrowUpRight } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const HelpContact = () => {
  return (
    <div className="helpContact">
      <div className="helpContact_headings">
        <h1 className="heading-1">Need help? Talk to our expert.</h1>
        <h6>Talk to our experts or Browse through more properties.</h6>
      </div>
      <div className="helpContact_btns">
        <Link to="/contact" className="links">
          <button className="btn helpContact_btn helpContact_btn--1">
            <span>Contact</span>
            <span className="icons-1">
              <BsArrowUpRight />
            </span>
          </button>
        </Link>
        <button className="btn helpContact_btn helpContact_btn--2">
          <span className="icons-2">
            <IoCallOutline />
          </span>
          <span>8058573840</span>
        </button>
      </div>
    </div>
  );
};

export default HelpContact;
