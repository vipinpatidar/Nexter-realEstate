// import React from "react";

//css
import "./DetailsAddress.scss";

const DetailsAddress = ({ address, name, country }) => {
  const [street, postcode] = address.split(",");
  return (
    <div className="addressDetails">
      <div className="addressDetails_grid">
        <div className="addressDetails_shall">
          <h6 className="addressDetails_heading">House Name</h6>
          <h6 className="addressDetails_pera">{name}</h6>
        </div>
        <div className="addressDetails_shall">
          <h6 className="addressDetails_heading">Country</h6>
          <h6 className="addressDetails_pera">{country}</h6>
        </div>
        <div className="addressDetails_shall">
          <h6 className="addressDetails_heading">Address</h6>
          <h6 className="addressDetails_pera">{street}</h6>
        </div>
        <div className="addressDetails_shall">
          <h6 className="addressDetails_heading">Zip/Postal Code</h6>
          <h6 className="addressDetails_pera">{postcode}</h6>
        </div>
      </div>
      {/* map  */}
      <div className="addressDetails_mapDiv">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3610.1786541102915!2d55.27180147506419!3d25.19719697771094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1683174020338!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="addressDetails_map"
        ></iframe>
      </div>
    </div>
  );
};

export default DetailsAddress;
