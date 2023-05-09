// import React from "react";

//css
import "./ContactHeader.scss";
//image
import logo from "../../assets/outer/logo.png";
import { Link } from "react-router-dom";
// import background from "../../assets/bigImg/contact.jpg";

const ContactHeader = ({
  background,
  h3,
  h1,
  pera,
  btnText,
  isContact,
  isBright,
}) => {
  return (
    <div
      className="contactHeader"
      style={{
        backgroundImage: `${
          isBright
            ? `linear-gradient(rgba(16, 29, 44, 0.73),rgba(16, 29, 44, 0.73)),url(${background})`
            : `linear-gradient(rgba(16, 29, 44, 0.79),rgba(16, 29, 44, 0.79)),url(${background})`
        }`,
      }}
    >
      <img src={logo} alt="logo pic" className="contactHeader_logo" />
      <h3 className="contactHeader_text heading-3">{h3}</h3>
      <h1 className=" heading-1 contactHeader_heading">{h1}</h1>
      <p className="contactHeader_pera">{pera}</p>

      <Link className="link" to={`${isContact ? "/properties" : "/contact"}`}>
        <button className="btn contactHeader_btn">{btnText}</button>
      </Link>
    </div>
  );
};

export default ContactHeader;
